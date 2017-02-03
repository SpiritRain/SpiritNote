import React, {Component} from 'react';
import {
	Dimensions,
	Image,
	ListView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Constants from '../Constants'
import * as memoItemActions from '../actions/MemoItemAction';
import MemoItem from '../components/MemoItem'
import Navbar from '../components/Navbar'

const {height, width} = Dimensions.get('window');

let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2,
	sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

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

	_renderRow(rowData, sectionID, rowID){
		return (
			<MemoItem
				data={rowData}
				onItemPress={()=>this._onTogglePress(sectionID, rowID)}
				onButtonPress={()=>this._onRemovePress(sectionID, rowID)}
				buttonText='remove'
			 />
		);
	}

	render() {
		return (
			<Image style={styles.container} source={Constants.IMAGE_BG} resizeMode='cover'>
				<Navbar
					navigator={this.props.navigator} 
					showMoreButton={true}
					showBackButton={true}
				/>

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
					dataSource={ds.cloneWithRowsAndSections(this.props.memoItem.itemList)}
					renderRow={(rowData, sectionID, rowID)=>this._renderRow(rowData ,sectionID, rowID)}
					renderSectionHeader={this._renderSectionHeader}
					/>
			</Image>
		);
	}

	_onAddPress(){
		this.props.actions.createMemoItem(this.state.inputText)
	}

	_onTogglePress(sectionID, rowID){
		this.props.actions.toggleMemoItem(sectionID, rowID)
	}

	_onRemovePress(sectionID, rowID){
		this.props.actions.removeMemoItem(sectionID, rowID)
	}
}

export default connect(state => ({
		memoItem: state.memoItem,
	}),
	(dispatch) => ({
		actions: bindActionCreators(memoItemActions, dispatch),
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
		backgroundColor : 'skyblue' ,
		margin : 1,
		alignItems: 'flex-start',
		justifyContent:'center',
		height: 40
	}
});