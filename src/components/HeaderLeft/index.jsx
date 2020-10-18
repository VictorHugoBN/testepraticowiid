import { Avatar, Box, Button, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';

const HeaderLeft = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseMenu = (e) => {
		setAnchorEl(null);
	};
	return (
		<Box>
			<Button variant="text" onClick={handleOpenMenu}>
				<Avatar
					style={{ cursor: 'pointer' }}
					alt="User Avatar"
					src="https://www.w3schools.com/howto/img_avatar2.png"
				/>
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
		</Box>
	);
};

export default HeaderLeft;