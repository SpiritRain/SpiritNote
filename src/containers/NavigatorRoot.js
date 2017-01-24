'use strict';

import React, {Component} from 'react';
import {
	Navigator,
	BackAndroid,
	View,
	Text
} from 'react-native';
import MainPage from './MainPage';
import CounterScene from './CounterScene';
import Tabbar from './../components/Tabbar';
import NavigatorRoute from './../modules/NavigatorRoute';

let _navigator = null;

export default class NavigatorRoot extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<View style={{flex:1}}>
					<Text>Header</Text>
				</View>
				<Navigator
					ref={ (component) => this.navigator = component }
					style={{flex: 9}}
					configureScene={this._configureScene}
					renderScene={this._renderScene}
					initialRoute={{component: MainPage}}
				/>
				<Tabbar onTabPress={this._switchTab} />
			</View>
		);
	}

	_renderScene(route, navigator) {
		let Component = route.component;
		_navigator = navigator;
		return (
			<Component navigator={navigator} route={route} />
		);
	}

	_configureScene(route){
		if(route.sceneConfig){
			return route.sceneConfig;
		}
		return Navigator.SceneConfigs.VerticalDownSwipeJump;;
	}

	_switchTab(tab){
		switch(tab){
			case 'tab1':
				console.log('this is tab1');
				NavigatorRoute.replaceToMainScene(_navigator);
				return;
			case 'tab2':
				console.log('this is tab2');
				NavigatorRoute.pushToCounterScene(_navigator);
				return;
			case 'tab3':
				console.log('this is tab3');
				return;
			case 'tab4':
				console.log('this is tab4');
				return;
			case 'tab5':
				console.log('this is tab5');
				return;
			default:
				return;
		}
	}
	
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			return NavigatorRoute.navigatorPopBack(_navigator);
		});
	}

	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress');
	}
}