import { GET_ALL_INBOX_ITEM, GET_SIDE_BAR_ITEMS } from '../constants/actionsStrings';
import { getAllInboxItem, getSideBarItems } from '../services/services';

export const getAllInboxItemAction = (id) => async (dispatch) => {
	try {
		const res = await getAllInboxItem(id);
		dispatch({
			type: GET_ALL_INBOX_ITEM,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const getSideBarItemsAction = () => async (dispatch) => {
	try {
		const res = await getSideBarItems();
		dispatch({
			type: GET_SIDE_BAR_ITEMS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
