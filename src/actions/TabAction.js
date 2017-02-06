'use strict';
import * as types from './ActionTypes';

export function switchTab(id, routes) {
	return {
		type: types.SWITCH_TAB,
		id: id,
		routes: routes
	};
}
