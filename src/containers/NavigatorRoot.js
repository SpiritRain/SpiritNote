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
import MemoMainScene from './../containers/MemoMainScene';
import Tabbar from './../components/Tabbar';
import * as tabActions from '../actions/TabAction';
import Navbar from './../components/Navbar';
import NavigatorRoute from './../modules/NavigatorRoute';

let _navigator = null;
class NavigatorRoot extends Component {
	constructor(props) {
		super(props);
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
				<Tabbar
					data={this.props.tab}
					onTabPress={(tab)=>this._onTabPress(tab)}/>
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

	_onTabPress(tab){
		this.props.actions.switchTab(tab, _navigator.getCurrentRoutes());
		_navigator.immediatelyResetRouteStack(this.props.tab.tabList[tab].routes)
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


export default connect(state => ({
		tab: state.tab,
	}),
	(dispatch) => ({
		actions: bindActionCreators(tabActions, dispatch),
	})
)(NavigatorRoot);
