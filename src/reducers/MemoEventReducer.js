'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
	lastID: 2,
	eventList: {
		1: {
			title: 'title1',
			desc: 'desc',
			image: null,
			createDate: 0,
			editDate: 0
		} ,
		2: {
			title: 'title2',
			desc: null,
			image: null,
			createDate: 0,
			editDate: 0
		}
	}
}



export default function memoEvent(state = initialState, action = {}) {
	switch (action.type) {
		case types.ADD_MEMO_EVENT:
			state.lastID = state.lastID + 1;
			state.eventList[state.lastID] = {
				title: action.title,
				desc: action.desc,
				image: action.image,
				createDate: action.date,
				editDate: action.date,
			};
			return {
				...state
			};
		case types.EDIT_MEMO_EVENT:
			state.eventList[action.id].title = action.title;
			state.eventList[action.id].desc = action.desc;
			state.eventList[action.id].image = action.image;
			state.eventList[action.id].editDate = action.date;
			return {
				...state
			};
		case types.REMOVE_MEMO_EVENT:
			delete state.eventList[action.id];
			return {
				...state
			};
		default:
			return state;
	}
}
