import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './component/HOC/PrivateRoute';
import { isUserLoggedIn } from './actions';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	console.log(auth);

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	},[]);
	return (
		<div className="App">
			<Switch>
				<PrivateRoute path="/" exact component={Home} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
			</Switch>
		</div>
	);
}

export default App;
