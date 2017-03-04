'use strict';
import * as types from './ActionTypes';

export function switchTab(id) {
	return {
		type: types.SWITCH_TAB,
		id: id,
	};
}
