'use strict';

import React, {Component} from 'react';
import {
	Dimensions,
	Image,
	ListView,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Constants from '../Constants'
import * as memoEventActions from '../actions/MemoEventAction';
import MemoEvent from '../components/MemoEvent'
import Navbar from '../components/Navbar'
import NavigatorRoute from './../modules/NavigatorRoute';

const {height, width} = Dimensions.get('window');

class MemoEventCreatePage extends Component {
	constructor(props) {
		super(props);
		this.state={
			title: '',
			desc: '',
			image: null,
		}
	}

	_onAddPress(){
		if (this.state.title === '') {
			return;
		}
		this.props.actions.addMemoEvent(this.state.title, this.state.desc,  null, new Date().getTime());
		NavigatorRoute.navigatorPopBack(this.props.navigator);
	}

	render() {
		const { counter, actions } = this.props;
		return (
			<Image style={styles.container} source={Constants.IMAGE_BG} resizeMode='cover'>
				<Navbar
					navigator={this.props.navigator} 
					showMoreButton={true}
					showBackButton={true}
					moreButtonText='Add'
					onMorePress={()=>this._onAddPress()}
				/>
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
				<TouchableOpacity style={styles.button} onPress={()=>this._onAddPress()}>
					<Text style={styles.text}>add</Text>
				</TouchableOpacity>
			</Image>
		);
	}
}

export default connect(state => ({
		memoEvent: state.memoEvent,
	}),
	(dispatch) => ({
		actions: bindActionCreators(memoEventActions, dispatch),
	})
)(MemoEventCreatePage);

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