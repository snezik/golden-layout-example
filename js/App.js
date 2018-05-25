import React from 'react';
import {GoldenLayoutWrapper} from './components/GoldenLayoutWrapper'

export class App extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<h1>TEST PALOMA WITH ADDITIONAL LIB</h1>
				<GoldenLayoutWrapper />
			</div>
		)
	}
}