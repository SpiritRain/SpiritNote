'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backButton} onPress={() => {}}>
					<Text>back</Text>
				</TouchableOpacity>
				<View style={styles.title}>
					<Text>This is Nav bar</Text>
				</View>
				<TouchableOpacity style={styles.moreButton} onPress={() => {}}>
					<Text>More</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'flex-start',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	backButton: {
		backgroundColor: 'red',
	},
	title: {
		flex: 1,
		backgroundColor: 'yellow',
	},
	moreButton: {
		backgroundColor: 'green',
	},
});
