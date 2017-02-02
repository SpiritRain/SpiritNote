'use strict';
import * as types from './../actions/ActionTypes';

const initialState = {
	lastID: 2,
	eventList: [{
		id: 1,
		title: 'title1',
		desc: 'desc',
		image: null,
		date: 0,
	} , {
		id: 2,
		title: 'title2',
		desc: null,
		image: null,
		date: 0,
	}]
}



export default function memoEvent(state = initialState, action = {}) {
	let newList = state.eventList
	switch (action.type) {
		case types.ADD_MEMO_EVENT:
			return {
				...state,
				lastID: state.lastID + 1,
				eventList: state.eventList.concat({
					id: state.lastID + 1,
					title: action.title,
					desc: action.desc,
					image: action.image,
					date: action.date,
				})
			}		 
		case types.EDIT_MEMO_EVENT:
			for (let i in state.eventList) {
				if (state.eventList[i].id == action.id) {
					state.eventList.splice(i , 1, {
						title: action.title,
						desc: action.desc,
						image: action.image,
						date: action.date,
					});
				}
			}
			return {
				...state
			};
		case types.REMOVE_MEMO_EVENT:
			for (let i in state.eventList) {
				if (state.eventList[i].id == action.id) {
					state.eventList.splice(i , 1);
				}
			}
			return {
				...state
			};
		default:
			return state;
	}
}
