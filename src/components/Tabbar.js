'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

export default class Tabbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.tabItem} onPress={() => this.props.onTabPress('tab1')}>
					<View>
						<Text>Item 1</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.tabItem} onPress={() => this.props.onTabPress('tab2')}>
					<View>
						<Text>Item 2</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.tabItem} onPress={() => this.props.onTabPress('tab3')}>
					<View>
						<Text>Item 3</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.tabItem} onPress={() => this.props.onTabPress('tab4')}>
					<View>
						<Text>Item 4</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.tabItem} onPress={() => this.props.onTabPress('tab5')}>
					<View>
						<Text>Item 5</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		bottom: 0,
		alignSelf: 'flex-end',
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: 'green'
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
	},
});
