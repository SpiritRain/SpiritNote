'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';

export default class MemoEventEditor extends Component {
	static propTypes = {
		visible: React.PropTypes.bool,
		data: React.PropTypes.object,
		onConfirmPress: React.PropTypes.func.isRequired,
		onCancelPress: React.PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state={
			title: this.props.data.title,
			desc: this.props.data.desc
		}
	}

	_onConfirmPress(){
		console.log('this is Confirm button')
		this.props.onConfirmPress(this.props.data.id, this.state.title, this.state.desc)
	}

	_onCancelPress(){
		console.log('this is right button')
		this.props.onCancelPress()
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>title:</Text>
				<TextInput 
					style={styles.input}
					value={this.state.title}
					onChangeText={(text) => {this.setState({title:text})}}
					multiline={false}
				/>
				<Text style={styles.text}>desc:</Text>
				<TextInput 
					style={styles.input}
					value={this.state.desc}
					onChangeText={(text) => {this.setState({desc:text})}}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={()=>this._onConfirmPress()}>
						<Text style={styles.text}>确定</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={()=>this._onCancelPress()}>
						<Text style={styles.text}>取消</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: 'skyblue',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	text: {
		color : '#f5f5f5' ,
		backgroundColor : 'transparent',
		textAlign : 'center',
		margin: 10
	},
	input: {
		color: '#555555',
		width: 200,
		height: 50,
		padding: 10,
		borderColor: '#32C5E6',
		borderWidth: 1,
		borderRadius: 4,
		marginTop: 10,
		alignSelf: 'center',
		backgroundColor: '#ffffff'
	},
	buttonContainer:{
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {
		backgroundColor : '#003161',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius : 5,
		alignSelf : 'center',
		margin : 10,
	},
});
