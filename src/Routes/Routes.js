import { Route, Switch } from 'react-router';

import Login from '../Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import React from 'react';
import SwitchContents from './SwitchContents/SwitchContents';

const Routes = () => {
	return (
		<Switch>
			<PrivateRoute path="/dashboard/:section" exact component={SwitchContents} />
			<Route path="/login" exact component={Login} />
			<PrivateRoute path="/" />
		</Switch>
	);
};

export default Routes;
