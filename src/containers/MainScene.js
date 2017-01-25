import React, {Component} from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class MainScene extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>Main Page</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor : 'skyblue' ,
		width: width,
		height: height
	},
});