'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
	id: 0,
	name: '',
	completed: false,
};


function createMemo(id, name) {
	return {
		id: id,
		name: name,
		completed: false
	}
}

function toggleMemo(memos, id){
	return memos.map(t => {
		if (t.id !== id) {
			return t;
		}
		return Object.assign({}, t, {
			completed: !t.completed
		});
	});
}

export default function memoItem(state = initialState, action = {}) {
	switch (action.type) {
		case types.ADD_MEMO:
			return {
				...state,
				createMemo(action.id, action.name)
			};
		case types.REMOVE_MEMO:
			return {
				...state,
				createMemo(action.id, action.name)
			};
		case types.TOGGLE_MEMO:
			return toggleMemo(state, action.id);
		default:
			return state;
	}
}
