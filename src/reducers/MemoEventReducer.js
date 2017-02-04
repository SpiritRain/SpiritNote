'use strict';
import * as types from './../actions/ActionTypes';

const initialState = [
	{
		id: 1,
		title: 'title1',
		desc: 'desc',
		image: null,
		createDate: 0,
		editDate: 0
	} ,
	{
		id: 2,
		title: 'title2',
		desc: null,
		image: null,
		createDate: 0,
		editDate: 0
	}
]

export default function memoEvent(state = initialState, action = {}) {
	switch (action.type) {
		case types.ADD_MEMO_EVENT:
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					desc: action.desc,
					image: action.image,
					createDate: action.date,
					editDate: action.date
				}
			]
		case types.EDIT_MEMO_EVENT:
			return state.map( (item) => {
				if (item.id !== action.id) {
					return item
				}
				return {
					...item,
					title: action.title,
					desc: action.desc,
					image: action.image,
					editDate: action.date
				}
			})
		case types.REMOVE_MEMO_EVENT:
			return state.filter( (item) => {
					return item.id !== action.id;
				});
		default:
			return state;
	}
}
