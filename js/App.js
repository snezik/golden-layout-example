import React from 'react';
import {Provider} from 'react-redux';
// import PropTypes from 'prop-types';
import GoldenLayoutWrapper from './components/GoldenLayoutWrapper';
import {createStore} from 'redux';
import reducer from './reducer';
import {setState} from './ActionCreator';

const initialState = { 'count': 10 };
const store = createStore(reducer, initialState);

// store.dispatch(setState());

export class App extends React.Component {
	render(){
		return (
			<div>
				<h1>TEST PALOMA WITH ADDITIONAL LIB</h1>
				<Provider store={store}>
					<GoldenLayoutWrapper />
				</Provider>
			</div>
		)
	}
}