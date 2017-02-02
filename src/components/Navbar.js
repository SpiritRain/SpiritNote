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

	_onNavBackPress(){
		if (this.props.onBackPress == null) {
			this.props.navigator.pop();
		} else {
			this.props.onBackPress()
		}
	}

	_onNaveMorePress(){
		if (this.props.onMorePress == null) {
		} else {
			this.props.onMorePress()
		}
	}

	_renderBackButton(){
		let text = this.props.backButtonText 
		if (text == '') {
			text = 'Back'
		}
		return (
			<TouchableOpacity style={styles.backButton} onPress={() => this._onNavBackPress()}>
				<Text>{text}</Text>
			</TouchableOpacity>
		);
	}

	_renderMoreButton(){
		let text = this.props.moreButtonText 
		if (text == '') {
			text = 'More'
		}
		return (
			<TouchableOpacity style={styles.moreButton} onPress={() => this._onNaveMorePress()}>
				<Text>{text}</Text>
			</TouchableOpacity>
		);
	}
	render() {
		return (
			<View style={styles.container}>
				{this.props.showBackButton?this._renderBackButton():null}
				<View style={styles.title}>
					<Text>This is Nav bar</Text>
				</View>
				{this.props.showMoreButton?this._renderMoreButton():null}
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
		alignItems: 'center',
	},
	title: {
		flex: 1,
		alignItems: 'center',
	},
	moreButton: {
		alignItems: 'center',
	},
});
