'use strict';

import React, {Component} from 'react';
import {
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

export default class MemoEventEditor extends Component {
	static propTypes = {
		visible: React.PropTypes.bool,
		data: React.PropTypes.object.isRequired,
		onLeftPress: React.PropTypes.func.isRequired,
		onRightPress: React.PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state={
			title: this.props.data.title,
			desc: this.props.data.desc
		}
	}

	_onLeftPress(){
		console.log('this is left button')
	}

	_onRightPress(){
		console.log('this is right button')
	}

	render() {
		return (
			<Modal visible={this.props.visible}>
				<View style={styles.inputContainer}>
					<Text style={styles.text}>title:</Text>
					<TextInput 
						style={styles.input}
						value={this.state.title}
						onChangeText={(text) => {this.setState({title:text})}}
						multiline={false}
					/>
 				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.text}>desc:</Text>
					<TextInput 
						style={styles.input}
						value={this.state.desc}
						onChangeText={(text) => {this.setState({desc:text})}}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TouchableOpacity style={styles.button} onPress={()=>this._onLeftPress()}>
						<Text style={styles.text}>Left</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>this._onRightPress()}>
						<Text style={styles.text}>Right</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: width,
		height: height
	},
	inputContainer:{
		alignItems: 'center',
		flexDirection: 'row'
	},
	input: {
		width: 200,
		color: '#555555',
		padding: 10,
		height: 40,
		borderColor: '#32C5E6',
		borderWidth: 1,
		borderRadius: 4,
		marginTop: 10,
		alignSelf: 'center',
		backgroundColor: '#ffffff'
	},
	button: {
		backgroundColor : '#003161',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius : 5,
		alignSelf : 'center',
		width: width* 0.6,
		margin : 10,
	},
	text: {
		color : '#f5f5f5' ,
		backgroundColor : 'transparent',
		textAlign : 'center',
		margin: 10
	}
});
