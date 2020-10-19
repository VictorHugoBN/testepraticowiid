import { Box } from '@material-ui/core';
import React from 'react';
import UserAvatar from '../Reasuble/UserAvatar';

const SubMenuItens = ({ row, menuItemName }) => {
	const { id, name, subject, owner, users } = row;
	return (
		<Box
			display="flex"
			width="100%"
			style={{ margin: '5px', border: '1px solid black' }}
		>
			<Box
				width="70px"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<UserAvatar avatarInitial={owner} />
			</Box>
			<Box width="60%" display="flex" flexDirection="column">
				<Box>{name}</Box>
				<Box>{subject}</Box>
				<Box>{menuItemName}</Box>
			</Box>
			<Box width="20%">oioioioi</Box>
		</Box>
	);
};

export default SubMenuItens;
