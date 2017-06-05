import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import * as reducers from '../reducers';
import NavigatorRoot from './NavigatorRoot';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger ,thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<NavigatorRoot />
			</Provider>
		);
	}
}
