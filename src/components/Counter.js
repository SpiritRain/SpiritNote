'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

export default class Counter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>{this.props.counter.count}</Text>
				<TouchableOpacity onPress={this.props.increment} style={styles.button}>
					<Text>up</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.decrement} style={styles.button}>
					<Text>down</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	}
});
