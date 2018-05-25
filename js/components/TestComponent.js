import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

class TestComponent extends React.Component {
	render() {
		return (
			<h1>Test content</h1>
		);
	}
}

TestComponent.PropTypes = {
	incrementCount: PropTypes.func.isRequired
};

// function mapDispatchToProps(dispatch) {
// 	return {
// 		incrementCount: () => dispatch(incrementCount())
// 	};
// }
//
// export const IncrementButtonContainer = connect(
// 	null,
// 	mapDispatchToProps
// )(IncrementButton);