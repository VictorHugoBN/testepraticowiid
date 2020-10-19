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
import React, { useEffect, useState } from 'react';
import { getSideBarItems } from '../../services/services';

const MenuTree = ({ handleMenuItemChange }) => {
	const [open, setOpen] = useState(0);
	const [menuList, setMenuList] = useState([]);
	const loadMenuList = async () => {
		const response = await getSideBarItems();
		setMenuList(response.data);
	};

	useEffect(() => {
		loadMenuList();
	}, []);

	const handleClick = (key) => {
		if (key === open) {
			setOpen(null);
		} else setOpen(key);
	};

	return (
		<>
			<List
				component="nav"
				subheader={<ListSubheader component="div">Favoritos </ListSubheader>}
			>
				{menuList.map((item, key) => (
					<>
						<ListItem button onClick={() => handleClick(key)}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={item.name} />
							{open == key ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={open == key} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{item.subMenus.map((subMenu, key) => (
									<ListItem
										button
										onClick={() => {
											handleMenuItemChange(subMenu.id);
										}}
									>
										<ListItemIcon>
											<StarBorder />
										</ListItemIcon>

										<ListItemText primary={subMenu.name} key={subMenu.id} />
									</ListItem>
								))}
							</List>
						</Collapse>
					</>
				))}
			</List>
		</>
	);
};

export default MenuTree;
