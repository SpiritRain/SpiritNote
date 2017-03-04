'use strict';
import * as types from './../actions/ActionTypes';

const DEFAULT_LIST = {
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
};

const initialState = [
	{
		id: 1,
		title: 'title1',
		desc: 'desc',
		image: null,
		lastID: 90000,
		itemList: {...DEFAULT_LIST},
		createDate: 0,
		editDate: 0,
	} ,
	{
		id: 2,
		title: 'title2',
		desc: null,
		image: null,
		lastID: 90000,
		itemList: {...DEFAULT_LIST},
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
					lastID: 90000,
					itemList: {...DEFAULT_LIST},
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
