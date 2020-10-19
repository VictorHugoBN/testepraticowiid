import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from '@material-ui/core';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';

const MenuTree = () => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="Conta x" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>

						<ListItemText primary="Caixa de entrada" style={{}}></ListItemText>
					</ListItem>
				</List>
			</Collapse>
		</>
	);
};

export default MenuTree;
