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
import NavigatorRoute from './../modules/NavigatorRoute';

const {height, width} = Dimensions.get('window');

let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2,
	sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

class MemoLibraryPage extends Component {
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
				buttonText='添加'
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
					onMorePress={()=>this._onMorePress()}
				/>

				<View style={styles.listView}>
					<ListView
						
						dataSource={ds.cloneWithRowsAndSections(this.props.memoItem.itemList)}
						renderRow={(rowData, sectionID, rowID)=>this._renderRow(rowData ,sectionID, rowID)}
						renderSectionHeader={this._renderSectionHeader}
						/>
				</View>

				<View style={styles.inputContainer}>
					<TextInput 
						style={styles.input}
						value={this.state.inputText}
						onChangeText={(text) => {this.setState({inputText:text})}}
						multiline={false}
					/>
					<TouchableOpacity style={styles.button} onPress={()=>this._onAddPress()}>
						<Text>快速添加</Text>
					</TouchableOpacity>
 				</View>
			</Image>
		);
	}

	_onAddPress(){
		if (this.state.inputText != '') {
			this.props.actions.createMemoItem(this.state.inputText)
			this.setState({inputText: ''})
		}
	}

	_onTogglePress(sectionID, rowID){
		this.props.actions.toggleMemoItem(sectionID, rowID)
	}

	_onRemovePress(sectionID, rowID){
		this.props.actions.removeMemoItem(sectionID, rowID)
	}

	_onMorePress(){
	}
}

export default connect(state => ({
		memoItem: state.memoItem,
	}),
	(dispatch) => ({
		actions: bindActionCreators(memoItemActions, dispatch),
	})
)(MemoLibraryPage);

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		width: width,
		height: height
	},
	inputContainer:{
		flex: 1,
		alignItems: 'stretch',
		flexDirection: 'row'
	},
	input: {
		flex: 1,
		color: '#555555',
		padding: 10,
		borderColor: '#32C5E6',
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: '#ffffff'
	},
	button: {
		backgroundColor : '#ef5421',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius : 5,
		overflow:'hidden',
		borderColor : '#ef5421',
		padding: 5
	},
	listView:{
		flex: 11
	},
	sectionHeader : {
		backgroundColor : 'lightgrey' ,
		marginTop : 5,
		alignItems: 'flex-start',
		justifyContent:'center',
		height: 40
	}
});