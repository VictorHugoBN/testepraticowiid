import './App.css';

import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import React from 'react';
import Root from './Pages/Root';
import { store } from './store/store';
import theme from './constants/theme';

const App = () => {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<Root />
			</MuiThemeProvider>
		</Provider>
	);
};

export default App;
