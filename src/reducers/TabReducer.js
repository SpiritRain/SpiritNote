'use strict';
import * as types from './../actions/ActionTypes';

export default function tabbar(state = initialState, action = {}) {
	let newList = [...state.tabList];
	switch (action.type) {
		case types.SWITCH_TAB:
			newList[state.current].routes = action.routes;
			return {
				...state,
				current: action.id,
				tabList: newList
			}
		default:
			return state;
	}
}

const initialState = {
	current: 1,
	tabList: [
		{
			title: 'main',
			routes: [],
		}, {
			title: 'memo',
			routes: [],
		}, {
			title: 'tab2',
			routes: [],
		}, {
			title: 'tab3',
			routes: [],
		}, {
			title: 'count',
			routes: [],
		},
	]
}