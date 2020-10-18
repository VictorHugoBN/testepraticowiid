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
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderLeft from './components/HeaderLeft';
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
		},
		leftHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '10px',
		},
		rightContainer: {},
		menuTree: {
			margin: '5px',
		},
	}));
	const styles = useStyles();

	return (
		<Grid container className={styles.root}>
			<Grid
				container
				item
				className={styles.leftContainer}
				xs={3}
				direction="column"
			>
				{/* Inicio do Header */}

				<Box className={styles.leftHeader}>
					<HeaderLeft />
					<FormControl>
						<Select native variant="standard">
							<option>New</option>
						</Select>
					</FormControl>
				</Box>
				<Divider style={{ margin: '3px' }} />

				{/* Final do Header */}

				{/* Inicio do MenuList */}

				<Box className={styles.menuTree}>
					<List
						component="nav"
						subheader={
							<ListSubheader component="div">
								Favoritos{' '}
							</ListSubheader>
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
				item
				className={styles.rightContainer}
				xs={9}
				direction="column"
			>
				bbbb
			</Grid>
		</Grid>
	);
};

export default App;
