import { Route, useHistory } from 'react-router';

import React from 'react';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
	const history = useHistory();
	const token = useAuth();

	if (path === '/') {
		history.push('/dashboard/home');
	}
	if (!token) {
		history.push('/login');
	}

	return <Route path={path} component={Component} {...rest} />;
};

export default PrivateRoute;
