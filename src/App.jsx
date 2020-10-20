import { MuiThemeProvider, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import getMuiTheme from './constants/theme';

const App = () => {
	const [isAutenticaded, setIsAutenticaded] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	return (
		<MuiThemeProvider theme={getMuiTheme(darkMode)}>
			<Paper>
				{isAutenticaded ? (
					<Main
						darkMode={darkMode}
						handleDarkMode={() => {
							setDarkMode(!darkMode);
						}}
					/>
				) : (
					<Login onLogin={() => setIsAutenticaded(!isAutenticaded)} />
				)}
			</Paper>
		</MuiThemeProvider>
	);
};

export default App;
