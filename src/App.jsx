import {
	Box,
	createMuiTheme,
	MuiThemeProvider,
	Paper,
} from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import { dark } from '@material-ui/core/styles/createPalette';

const App = () => {
	const [isAutenticaded, setIsAutenticaded] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	const getMuiTheme = createMuiTheme({
		typography: {
			fontFamily: 'Roboto',
		},
		palette: {
			type: darkMode ? 'dark' : 'light',
			primary: {
				main: '#1259a4',
			},
		},
	});

	return (
		<MuiThemeProvider theme={getMuiTheme}>
			<Paper>
				{isAutenticaded ? (
					<Main
						handleDarkMode={(darkMode) => {
							return setDarkMode(darkMode);
						}}
					/>
				) : (
					<Login onLogin={() => setIsAutenticaded(true)} />
				)}
			</Paper>
		</MuiThemeProvider>
	);
};

export default App;
