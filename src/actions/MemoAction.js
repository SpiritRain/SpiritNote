'use strict';
import * as types from './ActionTypes';

export function addMemo(id, name) {
	return {
		type: types.ADD_MEMO,
		id: id,
		name: name
	};
}

export function removeMemo() {
	return {
		type: types.REMOVE_MEMO
	};
}

export function toggleMemo() {
	return {
		type: types.TOGGLE_MEMO
	};
}
