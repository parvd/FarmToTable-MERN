import React ,{useState} from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../component/Layout/index';
import Input from '../../component/UI/Input/input';
import { signup } from '../../actions';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const Signup = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
  const auth = useSelector((state) => state.auth);
  const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const userSignup = (e) => {
		e.preventDefault();
		const user = {
			firstName,
			lastName,
			email,
			password,
		};
		console.log(user);
		dispatch(signup(user));
	};
	if (auth.authenticate) {
		return <Redirect to={`/`} />;
  }
  if(user.loading){
    return <p>Loading...!</p>
  }
	return (
		<div>
			<Layout>
				<Container>
          {user.message}
					<Row style={{ marginTop: '150px' , }}>
						<Col md={{ span: 6, offset: 3 }}>
							<Form onSubmit={userSignup}>
								<Input
									Label="First Name"
									type="text"
									placeholder="Enter First Name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<Input
									Label="Last Name"
									type="text"
									placeholder="Enter Last Name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>

								<Input
									Label="Email address"
									type="email"
									placeholder="Enter email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input
									Label="Password"
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
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

export default Signup;
