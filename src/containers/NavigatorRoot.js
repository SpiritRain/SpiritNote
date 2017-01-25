'use strict';

import React, {Component} from 'react';
import {
	BackAndroid,
	Navigator,
	StatusBar,
	View
} from 'react-native';
import MemoMainScene from './../containers/MemoMainScene';
import Tabbar from './../components/Tabbar';
import Navbar from './../components/Navbar';
import NavigatorRoute from './../modules/NavigatorRoute';

let _navigator = null;
let _tabConfig;
export default class NavigatorRoot extends Component {
	constructor(props) {
		super(props);
		_tabConfig = [{
				title: 'main',
				onTabPress: this._onMainTabPress
			}, {
				title: 'memo',
				onTabPress: this._onMemoTabPress
			}, {
				title: 'tab3',
				onTabPress: ()=>this._onTabPress('tab3')
			}, {
				title: 'tab4',
				onTabPress: ()=>this._onTabPress('tab4')
			}, {
				title: 'counter',
				onTabPress: ()=>this._onTabPress('tab5')
			}];
	}

	render() {
		return (
			<View style={{flex:1, paddingTop: 20}}>
				<StatusBar barStyle="light-content"/>
				<Navigator
					ref={ (component) => this.navigator = component }
					style={{flex: 9}}
					configureScene={this._configureScene}
					renderScene={this._renderScene}
					initialRoute={{component: MemoMainScene}}
				/>
				<Tabbar tabConfig={_tabConfig}/>
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
		return Navigator.SceneConfigs.FloatFromRight;;
	}

	_getTabConfig(){
		return 
	}

	_onMainTabPress(){
		_tabConfig[0].active = true;
		NavigatorRoute.replaceToMainScene(_navigator);
	}

	_onMemoTabPress(){
		_tabConfig[1].active = true;
		NavigatorRoute.replaceToMemoScene(_navigator);
	}

	_onTabPress(tab){
		switch(tab){
			case 'tab1':
				console.log('this is tab1');
				NavigatorRoute.replaceToMainScene(_navigator);
				return;
			case 'tab2':
				console.log('this is tab2');
				NavigatorRoute.replaceToMemoScene(_navigator);
				return;
			case 'tab3':
				console.log('this is tab3');
				return;
			case 'tab4':
				console.log('this is tab4');
				return;
			case 'tab5':
				console.log('this is tab5');
				NavigatorRoute.pushToCounterScene(_navigator);
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