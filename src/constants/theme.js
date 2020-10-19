import { createMuiTheme } from '@material-ui/core';

export default (darkMode) =>
	createMuiTheme({
		typography: {
			fontFamily: 'Roboto',
		},
		palette: {
			type: darkMode ? 'dark' : 'light',
			primary: {
				main: '#0078d4',
			},
			secondary: {
				main: '#d45c00',
			},
		},
	});
