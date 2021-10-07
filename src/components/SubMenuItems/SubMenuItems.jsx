import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SubMenuItem from './SubMenuItem';
import { getAllInboxItem } from '../../services/services';
import { getAllInboxItemAction } from '../../actions/actions';
import { useState } from 'react';

const SubMenuItems = ({ id, selectedRowsIds, setSelectedRowsIds, setSubMenuItens, subMenuItens }) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const inboxItems = useSelector((state) => state.inboxItems);

	useEffect(() => {
		const fetch = async () => {
			setLoading(true);
			await dispatch(getAllInboxItemAction(id));
			setLoading(false);
		};
		fetch();
	}, [id]);

	return (
		<Box width="100%" height="100%" alignItems="center" justifyContent="center">
			{loading ? (
				<Box display="flex" justifyContent="center" alignItems="center">
					<CircularProgress size={80} />
				</Box>
			) : inboxItems.subMenuItems && inboxItems.subMenuItems.length > 0 ? (
				inboxItems.subMenuItems.map((item) => (
					<SubMenuItem
						key={subMenuItens.id}
						row={item}
						selectedRowsIds={selectedRowsIds}
						setSelectedRowsIds={setSelectedRowsIds}
					/>
				))
			) : null}
		</Box>
	);
};

export default SubMenuItems;
