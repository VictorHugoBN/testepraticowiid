import axios from 'axios';

export const getAllInboxItem = (id) =>
	axios.get(
		`http://my-json-server.typicode.com/workinideas/vagafrontendteste/items/${id}`
	);

export const getSideBarItems = () =>
	axios.get(process.env.REACT_APP_API_URL_MENU);
