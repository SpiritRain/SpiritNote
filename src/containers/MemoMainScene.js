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
import MemoEventEditor from '../components/MemoEventEditor'
import Navbar from '../components/Navbar'
import NavigatorRoute from './../modules/NavigatorRoute';

const {height, width} = Dimensions.get('window');
let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
});

let TEST_DATA = [{
		title: 'title1',
		desc: 'desc',
		image: null,
		date: 0,
	} , {
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
			editVisible: false,
			editData: {},
			addVisible: false,
			title: '',
			desc: '',
			inputText: ''
		}
	}

	_onItemPress(data){
		NavigatorRoute.pushToMemoListPage(this.props.navigator, data);
	}

	_onEditPress(id){
		this.props.actions.removeMemoEvent(id);
	}

	_renderRow(rowData){
		return (
			<MemoEvent
				data={rowData}
				onPress={()=>this._onItemPress(rowData)}
				onEditPress={()=>this._onEditPress(rowData)}
				onRemovePress={()=>this._onRemovePress(rowData.id)}
			 />
		);
	}

	_onAddPress(){
		this.setState({addVisible: true});
	}

	_onEditPress(rowData){
		this.setState({editData: rowData, editVisible: true})
	}

	_onAddConfirmPress(id, title, desc){
		this.setState({addVisible: false})
		if (title != undefined && title !== '') {
			this.props.actions.addMemoEvent(title, desc, null, new Date())
		}
	}

	_onEditConfirmPress(id, title, desc){
		this.setState({editVisible: false})
		if (title != undefined && title !== '') {
			this.props.actions.editMemoEvent(id, title, desc, null, new Date())
		}
	}

	_onCancelPress(){
		this.setState({modalVisible: false})
	}

	_onRemovePress(id){
		this.props.actions.removeMemoEvent(id)
	}

	render() {
		console.log(this.props.memoEvent)
		return (
			<Image style={styles.container} source={Constants.IMAGE_BG} resizeMode='cover'>
				<Modal
					transparent={true}
					visible={this.state.addVisible}
					>
					<View style={styles.modalContainer}>
						<MemoEventEditor
							data={{title: ''}}
							onConfirmPress={(id, title, desc)=>this._onAddConfirmPress(id, title, desc)}
							onCancelPress={()=>this.setState({addVisible: false})}
							/>
					</View>
				</Modal>
				<Modal
					transparent={true}
					visible={this.state.editVisible}
					>
					<View style={styles.modalContainer}>
						<MemoEventEditor
							data={this.state.editData}
							onConfirmPress={(id, title, desc)=>this._onEditConfirmPress(id, title, desc)}
							onCancelPress={()=>this.setState({editVisible: false})}
							/>
					</View>
				</Modal>
				<Navbar
					navigator={this.props.navigator} 
					showMoreButton={true}
					moreButtonText='Add'
					onMorePress={()=>this._onAddPress()}
				/>
				<ListView
					dataSource={ds.cloneWithRows(this.props.memoEvent)}
					enableEmptySections={true}
					renderRow={(rowData)=>this._renderRow(rowData)}
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
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
});