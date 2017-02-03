import React, {Component} from 'react';
import {
	Dimensions,
	Image,
	ListView,
	Modal,
	View,
	TextInput,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Constants from '../Constants'
import * as memoEventActions from '../actions/MemoEventAction';
import * as countActions from '../actions/CounterAction';
import MemoEvent from '../components/MemoEvent'
import Navbar from '../components/Navbar'
import NavigatorRoute from './../modules/NavigatorRoute';

const {height, width} = Dimensions.get('window');
let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
});

let TEST_DATA = [{
		id: 1,
		title: 'title1',
		desc: 'desc',
		image: null,
		date: 0,
	} , {
		id: 2,
		title: 'title2',
		desc: null,
		image: null,
		date: 0,
	} ,
]

class MemoMainScene extends Component {
	constructor(props) {
		super(props);
		this.state={
			modalVisible: false,
			inputText: ''
		}
	}

	_onItemPress(data){
		NavigatorRoute.pushToMemoListPage(this.props.navigator, data);
	}

	_onEditPress(id){
		this.props.actions.removeMemoEvent(id);
	}

	_renderRow(rowData, sectionID, rowID){
		return (
			<MemoEvent
				data={rowData}
				onPress={()=>this._onItemPress(rowData)}
				onEditPress={()=>this._onEditPress(rowID)}
			 />
		);
	}

	_onAddPress(){
		 this.setState({modalVisible: true});
		// NavigatorRoute.pushToMemoEventCreatePage(this.props.navigator)
	}

	render() {
		return (
			<Image style={styles.container} source={Constants.IMAGE_BG} resizeMode='cover'>
				<Modal
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert("Modal has been closed.")}}
					>
					<View style={styles.modal}>
						<TouchableOpacity style={styles.button} onPress={() => this.setState({modalVisible: false})}>
							<Text>Hide Modal</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				<Navbar
					navigator={this.props.navigator} 
					showMoreButton={true}
					moreButtonText='Add'
					onMorePress={()=>this._onAddPress()}
				/>
				<ListView
					dataSource={ds.cloneWithRows(this.props.memoEvent.eventList)}
					enableEmptySections={true}
					renderRow={(rowData, sectionID, rowID)=>this._renderRow(rowData, sectionID, rowID)}
					/>
			</Image>
		);
	}
}

export default connect(state => ({
		memoEvent: state.memoEvent,
		counter: state.counter
	}),
	(dispatch) => ({
		actions: bindActionCreators(memoEventActions, dispatch),
		actions1: bindActionCreators(countActions, dispatch),
	})
)(MemoMainScene);

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
	modal: {
		backgroundColor: 'skyblue',
		width: 200,
		height: 200
	},
	button: {
		backgroundColor: 'red',

	}
});