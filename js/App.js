import React from 'react';
import {Provider} from 'react-redux';
import GoldenLayoutWrapper from './components/GoldenLayoutWrapper';
import {stores} from "./store";
export class App extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log(stores);
		return (
			<div>
				<h1>TEST PALOMA WITH ADDITIONAL LIB</h1>
				<Provider store={stores}>
					<GoldenLayoutWrapper />
				</Provider>
			</div>
		)
	}
}