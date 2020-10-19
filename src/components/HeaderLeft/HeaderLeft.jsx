import {
	Avatar,
	Box,
	Button,
	FormControl,
	InputLabel,
	Menu,
	MenuItem,
	Select,
	Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import UserAvatar from '../Reasuble/UserAvatar';

const HeaderLeft = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseMenu = (e) => {
		setAnchorEl(null);
	};
	return (
		<>
			<Button variant="text" onClick={handleOpenMenu}>
				<UserAvatar avatarInitial="12" />
			</Button>
			<Menu
				variant="selectedMenu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
			>
				<MenuItem onClick={handleOpenMenu}>Logout</MenuItem>
			</Menu>
		</>
	);
};

export default HeaderLeft;
