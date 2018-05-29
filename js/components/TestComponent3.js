import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ResponsiveBar} from 'nivo'
// import {connect} from 'react-redux';

// Pure react component. Should not be connected to redux store; its container
// should be connected to the store.
export class TestComponent3 extends Component {
	constructor(props) {
		super(props);
		this.data = [
			{
				"country": "AD",
				"hot dog": 169,
				"hot dogColor": "hsl(48, 70%, 50%)",
				"burger": 82,
				"burgerColor": "hsl(319, 70%, 50%)",
				"sandwich": 67,
				"sandwichColor": "hsl(152, 70%, 50%)",
				"kebab": 117,
				"kebabColor": "hsl(302, 70%, 50%)",
				"fries": 60,
				"friesColor": "hsl(18, 70%, 50%)",
				"donut": 152,
				"donutColor": "hsl(207, 70%, 50%)"
			},
			{
				"country": "AE",
				"hot dog": 87,
				"hot dogColor": "hsl(276, 70%, 50%)",
				"burger": 15,
				"burgerColor": "hsl(151, 70%, 50%)",
				"sandwich": 167,
				"sandwichColor": "hsl(353, 70%, 50%)",
				"kebab": 25,
				"kebabColor": "hsl(203, 70%, 50%)",
				"fries": 171,
				"friesColor": "hsl(333, 70%, 50%)",
				"donut": 174,
				"donutColor": "hsl(358, 70%, 50%)"
			},
			{
				"country": "AF",
				"hot dog": 48,
				"hot dogColor": "hsl(108, 70%, 50%)",
				"burger": 42,
				"burgerColor": "hsl(221, 70%, 50%)",
				"sandwich": 97,
				"sandwichColor": "hsl(15, 70%, 50%)",
				"kebab": 67,
				"kebabColor": "hsl(103, 70%, 50%)",
				"fries": 78,
				"friesColor": "hsl(356, 70%, 50%)",
				"donut": 153,
				"donutColor": "hsl(276, 70%, 50%)"
			},
			{
				"country": "AG",
				"hot dog": 192,
				"hot dogColor": "hsl(279, 70%, 50%)",
				"burger": 88,
				"burgerColor": "hsl(327, 70%, 50%)",
				"sandwich": 70,
				"sandwichColor": "hsl(119, 70%, 50%)",
				"kebab": 176,
				"kebabColor": "hsl(327, 70%, 50%)",
				"fries": 10,
				"friesColor": "hsl(300, 70%, 50%)",
				"donut": 59,
				"donutColor": "hsl(200, 70%, 50%)"
			},
			{
				"country": "AI",
				"hot dog": 95,
				"hot dogColor": "hsl(100, 70%, 50%)",
				"burger": 15,
				"burgerColor": "hsl(220, 70%, 50%)",
				"sandwich": 33,
				"sandwichColor": "hsl(335, 70%, 50%)",
				"kebab": 100,
				"kebabColor": "hsl(171, 70%, 50%)",
				"fries": 38,
				"friesColor": "hsl(125, 70%, 50%)",
				"donut": 26,
				"donutColor": "hsl(326, 70%, 50%)"
			},
			{
				"country": "AL",
				"hot dog": 12,
				"hot dogColor": "hsl(147, 70%, 50%)",
				"burger": 43,
				"burgerColor": "hsl(26, 70%, 50%)",
				"sandwich": 186,
				"sandwichColor": "hsl(296, 70%, 50%)",
				"kebab": 60,
				"kebabColor": "hsl(170, 70%, 50%)",
				"fries": 176,
				"friesColor": "hsl(97, 70%, 50%)",
				"donut": 58,
				"donutColor": "hsl(221, 70%, 50%)"
			},
			{
				"country": "AM",
				"hot dog": 94,
				"hot dogColor": "hsl(207, 70%, 50%)",
				"burger": 107,
				"burgerColor": "hsl(237, 70%, 50%)",
				"sandwich": 66,
				"sandwichColor": "hsl(143, 70%, 50%)",
				"kebab": 56,
				"kebabColor": "hsl(333, 70%, 50%)",
				"fries": 83,
				"friesColor": "hsl(21, 70%, 50%)",
				"donut": 37,
				"donutColor": "hsl(339, 70%, 50%)"
			}
		];
	}

	render() {
		return (
			<ResponsiveBar
				data={this.data}
				keys={[
					"hot dog",
					"burger",
					"sandwich",
					"kebab",
					"fries",
					"donut"
				]}
				indexBy="country"
				margin={{
					"top": 50,
					"right": 130,
					"bottom": 50,
					"left": 60
				}}
				padding={0.3}
				colors="nivo"
				colorBy="id"
				defs={[
					{
						"id": "dots",
						"type": "patternDots",
						"background": "inherit",
						"color": "#38bcb2",
						"size": 4,
						"padding": 1,
						"stagger": true
					},
					{
						"id": "lines",
						"type": "patternLines",
						"background": "inherit",
						"color": "#eed312",
						"rotation": -45,
						"lineWidth": 6,
						"spacing": 10
					}
				]}
				fill={[
					{
						"match": {
							"id": "fries"
						},
						"id": "dots"
					},
					{
						"match": {
							"id": "sandwich"
						},
						"id": "lines"
					}
				]}
				borderColor="inherit:darker(1.6)"
				axisBottom={{
					"orient": "bottom",
					"tickSize": 5,
					"tickPadding": 5,
					"tickRotation": 0,
					"legend": "country",
					"legendPosition": "center",
					"legendOffset": 36
				}}
				axisLeft={{
					"orient": "left",
					"tickSize": 5,
					"tickPadding": 5,
					"tickRotation": 0,
					"legend": "food",
					"legendPosition": "center",
					"legendOffset": -40
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor="inherit:darker(1.6)"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				legends={[
					{
						"dataFrom": "keys",
						"anchor": "bottom-right",
						"direction": "column",
						"translateX": 120,
						"itemWidth": 100,
						"itemHeight": 20,
						"itemsSpacing": 2,
						"symbolSize": 20
					}
				]}
				theme={{
					"tooltip": {
						"container": {
							"fontSize": "13px"
						}
					},
					"labels": {
						"textColor": "#555"
					}
				}}
			/>
		);
	}
}

TestComponent3.propTypes = {
	label: PropTypes.string.isRequired
};

// function mapStateToProps(state) {
// 	return {
// 		label: state.get('count')
// 	}
// }

// export const TestComponentContainer = connect(mapStateToProps)(TestComponent);