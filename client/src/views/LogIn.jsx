import React from 'react'
import clientAuth from '../clientAuth'

class LogIn extends React.Component {
	state = {
		fields: {
			email: '',
			password: ''
		}
	}

	onInputChange(e) {
		this.setState({
			fields: {
				...this.state.fields,
				[e.target.name]: e.target.value
			}
		})
	}

	onFormSubmit(e) {
		e.preventDefault()
		clientAuth.logIn(this.state.fields)
		  .then(user => {
			  this.setState({ fields: { email: '', password: ''}})
			  if(user) {
				  this.props.onLoginSuccess(user)
				  this.props.history.push('/dashboard')
			  }
		  })
	}
 	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<h1>Log In</h1>
				<form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onInputChange.bind(this)} >
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={password} />
					<button>Log In</button>
				</form>
			</div>
		)
	}
}

export default LogIn