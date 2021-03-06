import React from 'react';
// import WrapperContext from './GoldenLayoutWrapper';
import {connect} from 'react-redux';
import {fetchPosts} from '../ActionCreator';
import {getNewDataForTable} from '../ActionCreator'
// import { getEventHub } from './GoldenLayoutWrapper';
// const a = getEventHub;
// const eventHub = getEventHub();

import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

class TestComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: props.tableData
		};
		this.props.glEventHub.on('test-event', function(){console.log('TEST EVENT CALLED')});
	}
	componentDidMount(){
		console.log('11');
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then(response => response.json())
		// 	.then(json => {this.setState({data : json}); return json})
		// 	.then(json => console.log(json))
	}
	generationRow(){
		if(this.state.data && Array.isArray(this.state.data)) {
			return this.state.data.map((item,key)=>{
				return (<tr key={key}>
					<td>{item.userID}</td>
					<td>{item.id}</td>
					<td>{item.title}</td>
					<td>{item.body}</td>
				</tr>)
			})
		} else if(this.state.data && this.state.data instanceof Object) {
			return (<tr>
				<td>{this.state.data.userID}</td>
				<td>{this.state.data.id}</td>
				<td>{this.state.data.title}</td>
				<td>{this.state.data.body}</td>
			</tr>)
		}
	}
	getFakeData(){
		console.log('fake data');
		this.props.dispatch(fetchPosts());
		// fetch('https://jsonplaceholder.typicode.com/posts/1')
		// 	.then(response => response.json())
		// 	.then(json => {this.setState({data : json}); return json})
		// 	.then(json => console.log(json));
		this.props.glEventHub.emit('test-event', {testData:'test data here'})
	}
	render() {
		console.log('render');
		return (
			<div>
				<h1>Test content</h1>
				<button type="button" onClick={this.getFakeData.bind(this)}>Get fake data</button>
				<table>
					<thead>
						<tr>
							<th>UserID</th>
							<th>ID</th>
							<th>Title</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
					{this.generationRow()}
					</tbody>
				</table>

			</div>

		);
	}
}

TestComponent.propTypes = {
	label: PropTypes.number
};

 function mapStateToProps(state) {
	return {
		label: state['count'],
		tableData : state.tableData
	}
}

export const TestComponentConnected = connect(mapStateToProps)(TestComponent);