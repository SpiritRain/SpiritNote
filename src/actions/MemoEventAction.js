'use strict';
import * as types from './ActionTypes';

let nextEventID = 3

export function addMemoEvent(title, desc, image, date) {
	return {
		type: types.ADD_MEMO_EVENT,
		id: nextEventID++,
		title: title,
		desc: desc,
		image: image,
		date: date,
	};
}

export function editMemoEvent(id, title, desc, image, date) {
	return {
		type: types.EDIT_MEMO_EVENT,
		id: id,
		title: title,
		desc: desc,
		image: image,
		date: date,
	};
}


export function removeMemoEvent(id) {
	return {
		type: types.REMOVE_MEMO_EVENT,
		id: id,
	};
}
