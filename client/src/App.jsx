import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Home from './views/Home'
import Dashboard from './views/Dashboard';
import AdminDash from './views/AdminDash'

class App extends React.Component {
	state = {
		currentUser: null
	}

	componentDidMount() {
		this.setState({
			currentUser: clientAuth.getCurrentUser()
		})
	}

	onLoginSuccess(user) {
		this.setState({ currentUser: clientAuth.getCurrentUser() })
	}

	logOut() {
		clientAuth.logOut()
		this.setState({ currentUser: null })
	}

	render() {
		const { currentUser } = this.state
		return (
			<div className='App'>
				<NavBar />
				<Switch>
					<Route path="/dashboard" render={(props) => {
						return <Dashboard {...props} />
					}} />
					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />
					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />
					<Route path="/admin/dash" render={(props) => {
						if (this.state.currentUser) {
							if(this.state.currentUser.admin) {
								return <AdminDash {...props} />
							} else {
								return <Home />
							}
						} 
						return <Home />
					}} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		)
	}
}

export default App
