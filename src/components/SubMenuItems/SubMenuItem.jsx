import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import UserAvatar from '../Reasuble/UserAvatar';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles((theme) => ({
	menuItemRow: {
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#a9a9a9',
		},
	},
}));

const SubMenuItens = ({ row, menuItemName }) => {
	const styles = useStyles();
	const { id, name, subject, owner, users } = row;
	return (
		<Box
			className={styles.menuItemRow}
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
			<Box
				width="60%"
				display="flex"
				flexDirection="column"
				alignItems="flex-start"
			>
				<Box>{name}</Box>
				<Box>{subject}</Box>
				<Box>{menuItemName}</Box>
				<Box display="flex" alignContent="center">
					<WhatsAppIcon fontSize="small" />
					<span>Caixa de entrada</span>
				</Box>
			</Box>
			<Box width="20%">
				<AvatarGroup max={3} spacing="small">
					{users.map((user) => (
						<UserAvatar avatarInitial={user} avatarClassName="orange" />
					))}
				</AvatarGroup>
			</Box>
		</Box>
	);
};

export default SubMenuItens;
