import {
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	FormControl,
	Grid,
	List,
	ListSubheader,
	makeStyles,
	Menu,
	MenuItem,
	MenuList,
	Select,
	TextField,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import MenuTree from './components/MenuTree';

const App = () => {
	const [menuList, setMenuList] = useState([{}, {}, {}]);

	const useStyles = makeStyles((theme) => ({
		root: {
			backgroundColor: '#d2dbdc',
			width: '100vw',
			height: '100vh',
		},
		leftContainer: {
			backgroundColor: '#ccc',
			width: '100vw',
		},
		leftHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '10px',
		},
		rightContainer: {
			padding: '10px',
		},
		menuTree: {
			margin: '5px',
		},
		rightHeader: {
			padding: '10px',
		},
		rightContentArea: {},
	}));
	const styles = useStyles();

	return (
		<Grid container className={styles.root}>
			<Grid
				container
				className={styles.leftContainer}
				xs={3}
				direction="column"
			>
				{/* Inicio do Header da esquerda */}

				<Box className={styles.leftHeader}>
					<HeaderLeft />
					<FormControl>
						<Select native variant="standard">
							<option>New</option>
						</Select>
					</FormControl>
				</Box>
				<Divider style={{ margin: '3px' }} />

				{/* Final do Header  da esquerda */}

				{/* Inicio do MenuList */}

				<Box className={styles.menuTree}>
					<List
						component="nav"
						subheader={
							<ListSubheader component="div">Favoritos </ListSubheader>
						}
					>
						{menuList.map((menuItem, key) => (
							<MenuTree />
						))}
					</List>
				</Box>

				{/* Final do Meunulist */}
			</Grid>

			<Grid
				container
				className={styles.rightContainer}
				xs={9}
				direction="column"
			>
				<Box className={styles.rightHeader}>
					<form noValidate autoComplete="off">
						<TextField fullWidth="true" label="Pesquisa" variant="outlined" />
					</form>
					<HeaderRight />
				</Box>

				<Box className={styles.rightContentArea}>oi tudo bem </Box>
			</Grid>
		</Grid>
	);
};

export default App;
