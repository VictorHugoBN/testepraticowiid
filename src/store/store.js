import { GET_ALL_INBOX_ITEM, GET_SIDE_BAR_ITEMS } from '../constants/actionsStrings';
import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

const INITIAL_STATE = {
	inboxItems: {},
	sideBarItems: {},
};

const enhancer = compose(applyMiddleware(thunk));

const state = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALL_INBOX_ITEM:
			return { ...state, inboxItems: action.payload };

		case GET_SIDE_BAR_ITEMS:
			return { ...state, sideBarItems: action.payload };

		default:
			return { ...state };
	}
};

const store = createStore(state, enhancer);

export { store };
