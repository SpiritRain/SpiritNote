'use strict';
import * as types from './../actions/ActionTypes';
import * as ContainerRoutes from '../ContainerRoutes';

export default function tabbar(state = initialState, action = {}) {
	let newList = [...state.tabList];
	switch (action.type) {
		case types.SWITCH_TAB:
			return {
				...state,
				current: action.id,
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
		}, {
			title: 'memo',
		}, {
			title: 'tab2',
		}, {
			title: 'tab3',
		}, {
			title: 'count',
		},
	]
}