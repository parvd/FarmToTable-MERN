import React from 'react';
import Header from '../Header/index';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';
const Layout = (props) => {
	if (props.sidebar) {
		return (
			<>
				<Header />
				<Container >
					<Row>
						<Col md={2} className="sidebar">
							<ul>
								<li>
									<NavLink id="btnLeft" to="/">Home</NavLink>
								</li>
								<li>
									<NavLink id="btnLeft" to={`/category`}>Category</NavLink>
								</li>
								<li>
									<NavLink id="btnLeft" to={`/product`}>Products</NavLink>
								</li>
								<li>
									<NavLink id="btnLeft" to={`/orders`}>Orders</NavLink>
								</li>
							</ul>
						</Col>
						<Col md={10} style={{ margin: 'auto' ,paddingTop: '60px' }}>
							{props.children}
						</Col>
					</Row>
				</Container>
			</>
		);
	} else {
		return (
			<>
				<Header />
				{props.children}
			</>
		);
	}
};

export default Layout;
