import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './component/HOC/PrivateRoute';
import { isUserLoggedIn,getAllCategory } from './actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from './container/Products';
import Orders from './container/Orders';
import Category from './container/Category';

function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
			dispatch(getAllCategory());
		}
		
	}, []);
	return (
		<div className="App">
			<Switch>
				<PrivateRoute path="/" exact component={Home} />
				<PrivateRoute path="/category"  component={Category} />
				<PrivateRoute path="/product"  component={Products} />
				<PrivateRoute path="/orders" component={Orders} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
			</Switch>
		</div>
	);
}

export default App;
