import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getAllInboxItem } from '../../services/services';
import SubMenuItem from './SubMenuItem';

const SubMenuItems = ({
	id,
	selectedRowsIds,
	setSelectedRowsIds,
	setSubMenuItens,
	subMenuItens,
}) => {
	const [loading, setLoading] = useState(true);

	const loadInbox = async () => {
		setLoading(true);
		const response = await getAllInboxItem(id);
		setLoading(false);

		setSubMenuItens(response.data.subMenuItems);
	};

	useEffect(() => {
		loadInbox();
	}, [id]);

	return (
		<Box width="100%" height="100%" alignItems="center" justifyContent="center">
			{loading ? (
				<Box display="flex" justifyContent="center" alignItems="center">
					<CircularProgress size={80} />
				</Box>
			) : (
				subMenuItens.map((item) => (
					<SubMenuItem
						row={item}
						selectedRowsIds={selectedRowsIds}
						setSelectedRowsIds={setSelectedRowsIds}
					/>
				))
			)}
		</Box>
	);
};

export default SubMenuItems;
