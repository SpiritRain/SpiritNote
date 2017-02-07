'use strict';

import React, { Component } from 'react';
import {
  BackAndroid,
  Alert,
} from 'react-native';
import * as ContainerRoutes from '../ContainerRoutes';

export default class NavigatorRoute extends Component {

	static navigatorPopBack(navigator) {
		if (navigator && navigator.getCurrentRoutes().length > 1) {
			console.log('----------navigatorPopBack-1');
			navigator.pop();
			return true;
		}
		
		Alert.alert(
			'退出应用',
			'亲，您真的不再需要奴婢做牛做马了吗？',
			[
			{ text: '需要', onPress: () => {} },
			{ text: '不需要', onPress: () => {BackAndroid.exitApp()}},
			]
		);
		return true;
	}
	
	static replaceToMainScene(navigator) {
		navigator.replace({
			name: ContainerRoutes.MAIN_SCENE,
		});
	}

	static replaceToMemoScene(navigator) {
		navigator.replace({
			name: ContainerRoutes.MEMO_MAIN_SCENE,
		});
	}

	static pushToMemoListPage(navigator, data) {
		navigator.push({
			name: ContainerRoutes.MEMO_LIST_PAGE,
			data: data
		});
	}

	static pushToMemoLibraryPage(navigator, data) {
		navigator.push({
			name: ContainerRoutes.MEMO_LIBRARY_PAGE,
			data: data
		});
	}

	static pushToCounterScene(navigator) {
		navigator.push({
			name: ContainerRoutes.COUNTER_SCENE,
		});
	}

}