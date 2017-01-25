import React, {Component} from 'react';
import {
	Dimensions,
	Image,
	ListView,
	StyleSheet
} from 'react-native';
import * as Constants from '../Constants'
import MemoItem from '../components/MemoItem'
import NavigatorRoute from './../modules/NavigatorRoute';

const {height, width} = Dimensions.get('window');
let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
});

let TEST_DATA = [{
		title: 'title1',
		desc: 'desc',
		img: null,
		date: 0,
	} , {
		title: 'title2',
		desc: null,
		img: null,
		date: 0,
	} ,
]

export default class MemoMainScene extends Component {
	constructor(props) {
		super(props);
	}

	_onItemPress(data){
		console.log('_onItemPress: ' + data)
		NavigatorRoute.pushToMemoListPage(this.props.navigator, data);
	}

	_renderRow(rowData){
		return (
			<MemoItem data={rowData} onPress={()=>this._onItemPress(rowData)} />
		);
	}
	
	render() {
		return (
			<Image style={styles.container} source={Constants.IMAGE_BG} resizeMode='cover'>
				<ListView
					dataSource={ds.cloneWithRows(TEST_DATA)}
					enableEmptySections={true}
					renderRow={(rowData)=>this._renderRow(rowData)}
					/>
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		width: width,
		height: height
	}
});