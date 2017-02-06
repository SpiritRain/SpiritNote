'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

export default class Tabbar extends Component {
	static propTypes = {
		data: React.PropTypes.object.isRequired,
		onTabPress: React.PropTypes.func.isRequired
	};


	_renderTab(index){
		let style = this.props.data.current==index?styles.tabActive:styles.tabInActive;
		return (
			<TouchableOpacity style={style} onPress={() => this.props.onTabPress(index)}>
				<View>
					<Text>{this.props.data.tabList[index].title}</Text>
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
