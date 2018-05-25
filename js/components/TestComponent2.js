import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class TestComponent2 extends React.Component {
	render() {
		return (
			<button onClick={() => this.props.incrementCount()}>Increment Count</button>
		);
	}
}

TestComponent2.PropTypes = {
	label: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		incrementCount: () => dispatch(incrementCount())
	};
}

export const IncrementButtonContainer = connect(
	null,
	mapDispatchToProps
)(TestComponent2);