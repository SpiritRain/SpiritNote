'use strict';
import * as types from './../actions/ActionTypes';

function createMemo(id, name) {
	return {
		id: id,
		name: name
	}
}

function toggleMemo(memos, id){
	return null
}

export default function memoItem(state = initialState, action = {}) {
	switch (action.type) {
		case types.ADD_MEMO_ITEM:
			let newMemo = createMemo(action.id, action.name);
			state[action.key]={
				...state[action.key],
			};
			return  {
				...state
			};
		case types.CREATE_MEMO_ITEM:
			let lastID = state.lastID + 1
			state.lastID = lastID;
			state.itemList['自定义'][lastID]={
				name: action.name,
				compeleted: false
			};
			return  {
				...state
			};
		case types.REMOVE_MEMO_ITEM:
			delete state.itemList[action.key][action.id]
			return {
				...state
			};
		case types.TOGGLE_MEMO_ITEM:
			state.itemList[action.key][action.id].compeleted = !state.itemList[action.key][action.id].compeleted
			return {
				...state
			};
		default:
			return state;
	}
}

const initialState = {
	lastID: 0,
	itemList: {
		'服装': {
			10001: {name:'T恤', compeleted: true},
			10002: {name:'衬衫', compeleted: false},
			10004: {name:'冲锋衣', compeleted: false},
			10005: {name:'抓绒衫', compeleted: false},
			10007: {name:'外套', compeleted: false},
			10008: {name:'速干衣', compeleted: false},
			10009: {name:'速干裤', compeleted: false},
			10010: {name:'袜子', compeleted: false},
		},
		'个护': {
			20001: {name:'洗面奶', compeleted: false},
			20002: {name:'沐浴露', compeleted: false},
			20003: {name:'洗发水', compeleted: false},
			20004: {name:'护发素', compeleted: false},
			20005: {name:'牙膏', compeleted: false},
			20006: {name:'牙刷', compeleted: false},
			20007: {name:'毛巾', compeleted: false},
			20010: {name:'牙刷', compeleted: false},
			20011: {name:'牙膏', compeleted: false},
		},
		'自定义': {
		}
	}
}

const ITEM_DICTIONARY = {
	'服装': {
		10001:'T恤',
		10002:'衬衫',
		10003:'毛衣',
		10004:'冲锋衣',
		10005:'抓绒衫',
		10006:'羽绒服',
		10007:'外套',
		10008:'速干衣',
		10009:'速干裤',
		10010:'袜子',
	},
	'个护': {
		20001:'洗面奶',
		20002:'沐浴露',
		20003:'洗发水',
		20004:'护发素',
		20005:'牙膏',
		20006:'牙刷',
		20007:'毛巾',
		20008:'剃须刀',
		20009:'隐形眼镜',
		20010:'牙刷',
		20011:'牙膏',
	},
	'自定义': {}
}