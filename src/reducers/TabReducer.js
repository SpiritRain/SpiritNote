'use strict';
import * as types from './../actions/ActionTypes';
import * as ContainerRoutes from '../ContainerRoutes';

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
			routes: [{name: ContainerRoutes.MAIN_SCENE}],
		}, {
			title: 'memo',
			routes: [{name: ContainerRoutes.MEMO_MAIN_SCENE}],
		}, {
			title: 'tab2',
			routes: [{name: ContainerRoutes.MEMO_MAIN_SCENE}],
		}, {
			title: 'tab3',
			routes: [{name: ContainerRoutes.MEMO_MAIN_SCENE}],
		}, {
			title: 'count',
			routes: [{name: ContainerRoutes.COUNTER_SCENE}],
		},
	]
}