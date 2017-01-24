'use strict';

import React, { Component } from 'react';
import {
  BackAndroid,
  Alert,
} from 'react-native';
import CounterScene from './../containers/CounterScene';
import MainPage from './../containers/MainPage';

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
			component: MainPage,
		});
	}

	static pushToCounterScene(navigator) {
		navigator.push({
			component: CounterScene,
		});
	}

}