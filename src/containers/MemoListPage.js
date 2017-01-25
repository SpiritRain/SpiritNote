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
import * as memoActions from '../actions/MemoAction';

const {height, width} = Dimensions.get('window');

let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2,
	sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});


let TEST_DATA = {
	'section1': [
		{id: 1, name:'item1', completed: false},
		{id: 2, name:'item2', completed: true},
		{id: 3, name:'item3', completed: false},
		{id: 4, name:'item4', completed: false},
	],
	'section2': [
		{id: 5, name:'s2 item1', completed: false},
		{id: 6, name:'s2 item2', completed: false},
		{id: 7, name:'s2 item3', completed: false},
		{id: 8, name:'s2 item4', completed: true},
	]
}

let inputText = '';
class MemoListPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			inputText: ''
		}
	}

	_renderSectionHeader(data, sectionID){
		return (
			<View style={styles.sectionHeader}>
				<Text>{sectionID}</Text>
			</View>
		);
	}

	_renderSeparator(sectionID, rowID){
		return (
			<View style={styles.separator} key={sectionID+rowID}>
			</View>
		);
	}

	_renderRow(rowData){
		return (
			<View style={styles.rowContainer}>
				<Switch onValueChange={this._onValueChange} value={rowData.completed}></Switch>
				<Text>{rowData.name}</Text>
			</View>
		);
	}

	render() {
		return (
			<Image style={styles.container} source={Constants.IMAGE_BG} resizeMode='cover'>
				<View style={styles.inputContainer}>
					<TextInput 
						style={styles.input}
						value={this.state.inputText}
						onChangeText={(text) => {this.setState({inputText:text})}}
						multiline={false}
					/>
					<TouchableOpacity onPress={()=>this._onAddPress()}>
						<Text>add</Text>
					</TouchableOpacity>
 				</View>

				<ListView
					dataSource={ds.cloneWithRowsAndSections(TEST_DATA)}
					renderRow={(rowData)=>this._renderRow(rowData)}
					renderSectionHeader={this._renderSectionHeader}
					renderSeparator={(sectionID, rowID)=>this._renderSeparator(sectionID, rowID)}
					/>
			</Image>
		);
	}

	_onAddPress(){
		this.props.actions.addMemo(1, this.state.input)
	}

	_onValueChange(){
	}

}

export default connect(state => ({
		memoItem: state.memoItem
	}),
	(dispatch) => ({
		actions: bindActionCreators(memoActions, dispatch)
	})
)(MemoListPage);

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
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
	sectionHeader : {
		backgroundColor : '#f5f5f5' ,
		margin : 1,
		alignItems: 'flex-start',
		justifyContent:'center',
		height: 40
	},
	rowContainer : {
		backgroundColor : '#f5f5f5' ,
		flexDirection: 'row',
		margin : 1,
		alignItems: 'center',
		height: 30
	},
	separator : {
		margin : 1,
		alignItems: 'center',
		height: 5
	},

});