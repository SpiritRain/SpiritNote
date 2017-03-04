'use strict';

import React, {Component} from 'react';
import {
	BackAndroid,
	Navigator,
	StatusBar,
	View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as tabActions from '../actions/TabAction';
import * as ContainerRoutes from '../ContainerRoutes';
import NavigatorRoute from '../modules/NavigatorRoute';

// compoments
import Tabbar from '../components/Tabbar';
import Navbar from '../components/Navbar';

// containers
import CounterScene from './CounterScene';
import MainScene from './MainScene';
import MemoMainScene from './MemoMainScene';
import MemoListPage from './MemoListPage';
import MemoLibraryPage from './MemoLibraryPage';

let _navigator = null;
class NavigatorRoot extends Component {
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			return NavigatorRoute.navigatorPopBack(_navigator);
		});
	}

	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress');
	}

	render() {
		return (
			<View style={{flex:1, paddingTop: 20}}>
				<StatusBar barStyle="light-content"/>
				<Navigator
					style={{flex: 9}}
					configureScene={this._configureScene}
					renderScene={this._renderScene}
					initialRoute={{name: ContainerRoutes.MEMO_MAIN_SCENE}}
				/>
				<Tabbar
					data={this.props.tab}
					onTabPress={(tab)=>this._onTabPress(tab)}/>
			</View>
		);
	}

	_renderScene(route, navigator) {
		_navigator = navigator
		let Component = null;
		switch(route.name){
			case ContainerRoutes.MAIN_SCENE:
				Component = MainScene;
				break;
			case ContainerRoutes.MEMO_MAIN_SCENE:
				Component = MemoMainScene;
				break;
			case ContainerRoutes.MEMO_LIST_PAGE:
				Component = MemoListPage;
				break;
			case ContainerRoutes.MEMO_LIBRARY_PAGE:
				Component = MemoLibraryPage;
				break;
			case ContainerRoutes.COUNTER_SCENE:
				Component = CounterScene;
				break;
			default:
				Component = CounterScene;
		}
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

	_onTabPress(tab){
		this.props.actions.switchTab(tab);
	}
}


export default connect(state => ({
		tab: state.tab,
	}),
	(dispatch) => ({
		actions: bindActionCreators(tabActions, dispatch),
	})
)(NavigatorRoot);
