import { Box, Checkbox, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import UserAvatar from '../Reasuble/UserAvatar';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles(() => ({
	menuItemRow: {
		height: '70px',
		display: 'flex',
		width: '100%',
		padding: '5px',
		borderBottom: '1px solid gray',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'lightgrey',
		},
	},
}));

const SubMenuItens = ({
	row,
	menuItemName,
	selectedRowsIds,
	setSelectedRowsIds,
}) => {
	const styles = useStyles();
	const { id, name, subject, owner, users } = row;
	const [isHovering, setIsHovering] = useState(false);

	const isSelected = selectedRowsIds.includes(id);

	const handleCheck = (menuId) => {
		if (selectedRowsIds.includes(menuId)) {
			setSelectedRowsIds(selectedRowsIds.filter((item) => item !== menuId));
		} else {
			setSelectedRowsIds([...selectedRowsIds, menuId]);
		}
	};

	return (
		<Box
			onMouseOver={() => {
				setIsHovering(true);
			}}
			onMouseOut={() => {
				setIsHovering(false);
			}}
			className={styles.menuItemRow}
			style={{ backgroundColor: isSelected ? 'lightgray' : undefined }}
		>
			<Box
				width="70px"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				{isHovering || isSelected ? (
					<Checkbox checked={isSelected} onClick={() => handleCheck(id)} />
				) : (
					<UserAvatar avatarInitial={owner} />
				)}
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
					{users.map((user, index) => (
						<UserAvatar key={index} avatarInitial={user} />
					))}
				</AvatarGroup>
			</Box>
		</Box>
	);
};

export default SubMenuItens;
