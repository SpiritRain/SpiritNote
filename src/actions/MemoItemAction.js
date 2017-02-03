'use strict';
import * as types from './ActionTypes';

export function addMemoItem(key, id) {
	return {
		type: types.ADD_MEMO_ITEM,
		key: key,
		id: id
	};
}

export function createMemoItem(name) {
	return {
		type: types.CREATE_MEMO_ITEM,
		name: name
	};
}

export function removeMemoItem(key, id) {
	return {
		type: types.REMOVE_MEMO_ITEM,
		key: key,
		id: id
	};
}

export function toggleMemoItem(key, id) {
	return {
		type: types.TOGGLE_MEMO_ITEM,
		key: key,
		id: id
	};
}
