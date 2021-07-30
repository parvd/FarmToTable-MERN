import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {signout} from '../../actions/auth-actions'
const Header = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const Signout = () =>{
		dispatch(signout());
	}
	const renderNonLoggedInLinks = () => {
		return (
			<Nav>
				<li className="nav-item">
					<NavLink to="signin" className="nav-link">
						Signin
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="signup" className="nav-link">
						Signup
					</NavLink>
				</li>
			</Nav>
		);
	};

	const renderLoggedInLinks = () => {
		return (
			<Nav>
				<li className="nav-item">
					<span className="nav-link" onClick={Signout}>Signout</span>
				</li>
			</Nav>
		);
	};

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
				<Container fluid>
					<Link to="/#" className="navbar-brand">
						Admin Dashboard
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto"></Nav>
					</Navbar.Collapse>
					{auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
