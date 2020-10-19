import {
	Avatar,
	Box,
	Button,
	CircularProgress,
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
	Switch,
	TextField,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import './style.css';
import HeaderRight from '../../components/HeaderRight/HeaderRight';
import MenuTree from '../../components/MenuTree/MenuTree';
import SubMenuItens from '../../components/SubMenuItems/SubMenuItem';
import { getAllInboxItem, getSideBarItems } from '../../services/services';
import SubMenuItems from '../../components/SubMenuItems/SubMenuItems';
import { dark } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100vw',
		height: '100vh',
	},
	leftContainer: {
		backgroundColor: theme.palette.background.default,
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
	menuTree: {},
	rightHeader: {
		display: 'flex',
		flexDirection: 'column',
	},
	rightContentArea: {},
}));

const Main = ({ handleDarkMode }) => {
	const styles = useStyles();
	const [switchDarkMode, setSwitchDarkMode] = useState(false);

	const [selectedId, setSelectedId] = useState(11);

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
					<MenuTree
						handleMenuItemChange={(id) => {
							console.log(id);
							setSelectedId(id);
						}}
					/>
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
					<Box display="flex" justifyContent="flex-end">
						<Switch
							checked={switchDarkMode}
							onChange={() => {
								setSwitchDarkMode(!switchDarkMode);
								return handleDarkMode(!switchDarkMode);
							}}
						/>
					</Box>
					<HeaderRight />
					<SubMenuItems id={selectedId} />
				</Box>
			</Grid>
		</Grid>
	);
};

export default Main;
