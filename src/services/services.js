import axios from 'axios';

export const getAllInboxItem = (id) => {
	const url = `${process.env.REACT_APP_API_URL}/items/${id}`;
	return axios({
		method: 'get',
		url,
	});
};

export const getSideBarItems = () => {
	const url = `${process.env.REACT_APP_API_URL}/menus`;
	return axios({
		method: 'get',
		url,
	});
};
