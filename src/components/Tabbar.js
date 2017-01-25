'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

export default class Tabbar extends Component {
	constructor(props) {
		super(props);
		this.state={
			active: 0
		}
	}

	_onTabPress(index){
		this.setState({active: index});
		this.props.tabConfig[index].onTabPress();
	}

	_renderTab(index){
		let style = this.state.active==index?styles.tabActive:styles.tabInActive;
		return (
			<TouchableOpacity style={style} onPress={() => this._onTabPress(index)}>
				<View>
					<Text>{this.props.tabConfig[index].title}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this._renderTab(0)}
				{this._renderTab(1)}
				{this._renderTab(2)}
				{this._renderTab(3)}
				{this._renderTab(4)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 48,
		flexDirection: 'row',
		backgroundColor: 'firebrick',
		borderTopWidth: 1,
		borderTopColor: 'darkblue'
	},
	tabActive: {
		flex: 1,
		borderBottomWidth: 5,
		borderBottomColor: 'skyblue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabInActive: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

});
