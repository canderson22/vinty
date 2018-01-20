import React from 'react'
import clientAuth from '../clientAuth'

class SignUp extends React.Component {
	state = {
	fields: {
		email: '',
		password: '',
		name: ''
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
	clientAuth.signUp(this.state.fields)
		.then(user => {
			this.setState({ fields: { email: '', password: '', name: ''}})
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
}

	render() {
		const { email, password, name } = this.state.fields
		return (
			<div className='SignUp'>
				<h1>Sign Up</h1>
				<form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onInputChange.bind(this)} >
					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={email} />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={password} />
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={name}/>
					<button>Sign Up</button>
				</form>
			</div>
		)
	}
}

export default SignUp
