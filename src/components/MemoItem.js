'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

export default class MemoItem extends Component {
	static propTypes = {
		buttonText: React.PropTypes.string,
		data: React.PropTypes.object.isRequired,
		onItemPress: React.PropTypes.func.isRequired,
		onButtonPress: React.PropTypes.func.isRequired,
	};

	render() {
		let style = this.props.data.compeleted? styles.textCompleted: styles.textNormal;
		let text = this.props.buttonText
		if (text == null || text === '') {
			text = 'Button'
		}
		return (
			<TouchableOpacity style={styles.container} onPress={this.props.onItemPress}>
				<Text style={style}>{this.props.data.name}</Text>
				<TouchableOpacity style={styles.button} onPress={this.props.onButtonPress}>
					<Text>{text}</Text>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		backgroundColor : '#f5f5f5' ,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginTop: 1,
		paddingHorizontal: 10,
		height: 30
	},
	textNormal: {
		color: 'black',
		fontStyle: 'normal'
	},
	textCompleted: {
		color: 'grey',
		fontStyle: 'italic'
	},
	button : {
		backgroundColor: 'red',
	},
});
