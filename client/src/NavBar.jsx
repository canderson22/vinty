import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, Nav,MenuItem}from 'react-bootstrap'


const NavBar = (props) => {
	return (
		<div className='NavBar'>
			<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				Vinty
				{/* <a href="#brand">Vinty</a> */}
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
				{
					!props.currentUser ?
					<NavItem>
						<Link eventKey={1} to="/login">
							Log in
						</Link>
					</NavItem>
					: ""
				}
				{
					!props.currentUser ?
					<NavItem>
						<Link eventKey={2} to="/signup">
							Sign Up
						</Link>
					</NavItem>
					: ""
				}
				{
					props.currentUser ?
					<NavItem>
						<Link eventKey={2} to="/logout">
							Log Out
						</Link>
					</NavItem>
					: ""
				}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
		</div>
	)
}

export default NavBar
