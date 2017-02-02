'use strict';

import React, {Component} from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import * as Constants from '../Constants'
import * as Utils from '../modules/Utils'

export default class MemoEvent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let date = this.props.data.date;
		let dateStr = Utils.convertStringToTime(date, 'yyyy年MM月dd日');

		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.imageContainer} onPress={()=>this.props.onEditPress(this.props.data.id)}>
					<Image style={styles.image} source={this.props.data.image==null?Constants.IMAGE_MEMO_DEFAULT:this.props.data.image}></Image>
				</TouchableOpacity>
				<TouchableOpacity style={styles.infoContainer} onPress={()=>this.props.onPress()}>
					<View style={styles.titleContainer}>
						<View style={styles.title}>
							<Text>{this.props.data.title}</Text>
						</View>
						<Image style={styles.editer} source={Constants.IMAGE_EDIT}></Image>
					</View>
					<View style={styles.descContainer}>
						<Text>{this.props.data.desc}</Text>
					</View>
					<View style={styles.dateContainer}>
						<Text>{dateStr}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flexDirection : 'row' ,
		backgroundColor : '#f5f5f5' ,
		margin : 15,
		borderRadius : 5,
		alignItems: 'stretch',
		height: 120
	},
	imageContainer:{
		justifyContent: 'center',
	},
	image: {
		margin: 5,
		height: 100,
		width: 100
	},
	infoContainer:{
		flex: 1,
		alignItems: 'stretch',
	},
	titleContainer:{
		flexDirection: 'row',
		alignItems: 'center',
	},
	title:{
		flex: 1,
		alignItems: 'center',
	},
	editer:{
		height: 20,
		width: 20
	},
	descContainer:{
		flex: 1,
		alignItems: 'flex-start',
	},
	dateContainer:{
		alignItems: 'flex-end',
		margin: 5
	},
});
