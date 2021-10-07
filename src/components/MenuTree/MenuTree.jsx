import { Collapse, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import { getSideBarItemsAction } from '../../actions/actions';

const MenuTree = ({ handleChangeInbox }) => {
	const [open, setOpen] = useState(0);
	const [menuList, setMenuList] = useState([]);
	const dispatch = useDispatch();
	const sideBarItems = useSelector((state) => state.sideBarItems);

	useEffect(() => {
		dispatch(getSideBarItemsAction());
	}, []);

	/* 	const loadMenuList = async () => {
		const response = await getSideBarItems();
		setMenuList(response.data);
	};

	useEffect(() => {
		loadMenuList();
	}, []); */

	const handleClick = (key) => {
		if (key === open) {
			setOpen(null);
		} else setOpen(key);
	};

	return (
		<>
			<List component="nav" subheader={<ListSubheader component="div">Favoritos </ListSubheader>}>
				{sideBarItems.length > 0
					? sideBarItems.map((item, key) => (
							<>
								<ListItem key={key} button onClick={() => handleClick(key)}>
									<ListItemIcon>
										<InboxIcon />
									</ListItemIcon>
									<ListItemText primary={item.name} />
									{open === key ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={open === key} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										{item.subMenus.map((subMenu) => (
											<ListItem
												key={subMenu.id}
												button
												onClick={() => {
													handleChangeInbox(subMenu.id);
												}}
											>
												<ListItemIcon>
													<StarBorder />
												</ListItemIcon>

												<ListItemText primary={subMenu.name} />
											</ListItem>
										))}
									</List>
								</Collapse>
							</>
					  ))
					: null}
			</List>
		</>
	);
};

export default MenuTree;
