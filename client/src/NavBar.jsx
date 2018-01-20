import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, Nav,MenuItem}from 'react-bootstrap'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand">Vinty</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem>
				<Link eventKey={1} to="/">
					Home
				</Link>
			</NavItem>
			<NavItem>
				<Link eventKey={1} to="/login">
					Log in
				</Link>
				</NavItem>
				<NavItem>
				<Link eventKey={2} to="/signup">
					Sign Up
				</Link>
				</NavItem>
				<NavItem>
				<Link eventKey={2} to="/logout">
					Log Out
				</Link>
				</NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Action</MenuItem>
					<MenuItem eventKey={3.2}>Another action</MenuItem>
					<MenuItem eventKey={3.3}>Something else here</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.3}>Separated link</MenuItem>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
		</div>
	)
}

export default NavBar
