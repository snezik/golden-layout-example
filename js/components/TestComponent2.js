import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RadialChart} from 'react-vis';
import {setState} from "../ActionCreator";

export class TestComponent2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			data: [
				{angle: 1, color: '#89DAC1', name: 'green', opacity: 0.2},
				{angle: 2, color: '#F6D18A', name: 'yellow'},
				{angle: 5, color: '#1E96BE', name: 'cyan'},
				{angle: 3, color: '#DA70BF', name: 'magenta'},
				{angle: 5, color: '#F6D18A', name: new Date().toLocaleTimeString()}
			]
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div>
				<button onClick={() => this.props.incrementCount()}>Increment Count</button>
				<p className="clock">Just count for test updating : {this.state.date.toLocaleTimeString()}</p>
				<RadialChart
					colorType={'literal'}
					colorDomain={[0, 100]}
					colorRange={[0, 10]}
					margin={{top: 100}}
					getLabel={d => d.name}
					data={this.state.data}
					labelsRadiusMultiplier={1.1}
					labelsStyle={{fontSize: 16, fill: '#222'}}
					showLabels
					style={{stroke: '#fff', strokeWidth: 2}}
					width={400}
					height={300} />
				<button type="button" onClick={this.getFakeData}>Get fake data</button>
			</div>

			)
	}
}

TestComponent2.propTypes = {
	incrementCount: PropTypes.func
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