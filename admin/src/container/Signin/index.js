import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layout';
import Input from '../../component/UI/Input/input';
import { login } from '../../actions';
import { isUserLoggedIn } from '../../actions';
import { Redirect } from 'react-router-dom';
const Signin = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const userLogin = (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		console.log(user);
		dispatch(login(user));
	};

	if (auth.authenticate) {
		return <Redirect to={`/`} />;
	}
	return (
		<div>
			<Layout>
				<Container>
					<Row style={{ marginTop: '150px',}}>
						<Col md={{ span: 6, offset: 3 }}>
							<Form onSubmit={userLogin}>
								<Input
									Label="Email address"
									type="email"
									value={email}
									placeholder="Enter email"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								<Input
									Label="Password"
									type="password"
									value={password}
									placeholder="Password"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Layout>
		</div>
	);
};

export default Signin;
