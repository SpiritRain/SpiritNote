'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as counterActions from '../actions/CounterAction';

// @connect(state => ({
//   state: state.counter
// }))
class CounterScene extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { counter, actions } = this.props;
		return (
			<Counter
				counter={counter}
				{...actions} />
		);
	}
}

export default connect(state => ({
		counter: state.counter
	}),
	(dispatch) => ({
		actions: bindActionCreators(counterActions, dispatch)
	})
)(CounterScene);
