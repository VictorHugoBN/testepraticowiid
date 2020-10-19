import { Box, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Main from './Pages/Main';
import Login from './Pages/Login';

const getMuiTheme = () =>
	createMuiTheme({
		typography: {
			fontFamily: 'Roboto',
		},
		palette: {
			primary: {
				main: '#1259a4',
			},
		},
	});

const App = () => {
	const [isAutenticaded, setIsAutenticaded] = useState(true);

	return (
		<MuiThemeProvider theme={getMuiTheme()}>
			{isAutenticaded ? (
				<Main />
			) : (
				<Login onLogin={() => setIsAutenticaded(true)} />
			)}
		</MuiThemeProvider>
	);
};

export default App;
