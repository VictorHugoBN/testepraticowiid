import { Box, Typography } from '@material-ui/core';
import React from 'react';
import UserAvatar from '../Reasuble/UserAvatar';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const SubMenuItens = ({ row, menuItemName }) => {
	const { id, name, subject, owner, users } = row;
	return (
		<Box
			height="70px"
			display="flex"
			width="100%"
			style={{ padding: '5px', borderBottom: '1px solid gray' }}
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
				<Box>
					<Box display="flex" alignItems="flex-end">
						<WhatsAppIcon fontSize="small" />
						<span>Caixa de entrada</span>
					</Box>
				</Box>
			</Box>
			<Box width="20%" display="flex" flexDirection="row">
				{users.map(() => (
					<UserAvatar avatarInitial={users} />
				))}
			</Box>
		</Box>
	);
};

export default SubMenuItens;
