import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

// Pure react component. Should not be connected to redux store; its container
// should be connected to the store.
export class TestComponent2 extends React.Component {
	render() {
		return (
			<h1>{this.props.label}</h1>
		);
	}
}

TestComponent2.PropTypes = {
	label: PropTypes.string.isRequired
};

// function mapStateToProps(state) {
// 	return {
// 		label: state.get('count')
// 	}
// }

// export const TestComponentContainer = connect(mapStateToProps)(TestComponent);