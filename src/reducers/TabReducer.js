'use strict';
import * as types from './../actions/ActionTypes';
import CounterScene from './../containers/CounterScene';
import MainScene from './../containers/MainScene';
import MemoMainScene from './../containers/MemoMainScene';

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
			routes: [{component: MainScene}],
		}, {
			title: 'memo',
			routes: [{component: MemoMainScene}],
		}, {
			title: 'tab2',
			routes: [{component: MainScene}],
		}, {
			title: 'tab3',
			routes: [{component: MainScene}],
		}, {
			title: 'count',
			routes: [{component: CounterScene}],
		},
	]
}