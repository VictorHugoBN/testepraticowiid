import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getAllInboxItem } from '../../services/services';
import SubMenuItens from './SubMenuItem';

const SubMenuItems = ({ id }) => {
	const [loadingMenuItems, setloadingMenuItems] = useState(true);
	const [subMenuItens, setSubMenuItens] = useState([]);

	const loadInbox = async () => {
		setloadingMenuItems(true);
		const response = await getAllInboxItem(id);
		setloadingMenuItems(false);

		setSubMenuItens(response.data.subMenuItems);
	};

	useEffect(() => {
		loadInbox();
	}, [id]);

	return (
		<Box width="100%">
			{loadingMenuItems ? (
				<CircularProgress />
			) : (
				subMenuItens.map((item, key) => <SubMenuItens row={item} />)
			)}
		</Box>
	);
};

export default SubMenuItems;
