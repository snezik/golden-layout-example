import React from 'react';
import GoldenLayout from 'golden-layout';
import {TestComponentContainer} from "./TestComponentContainer";
import {TestComponent2} from "./TestComponent2";
import {TestComponent3} from "./TestComponent3";

export class GoldenLayoutWrapper extends React.Component {

	componentDidMount() {
		const config = {
			settings: {
				hasHeaders: false,
				showCloseIcon: true
			},
			content: [{
				type: 'row',
				content: [{
					type: 'react-component',
					component: 'TestComponentContainer',
					props: { label: 'A' }
				}, {
					type: 'react-component',
					component: 'TestComponent2',
					props: { label: 'B' },
				}, {
					type: 'react-component',
					component: 'TestComponent3',
					props: { label: 'C' }
				}]
			}]
		};

		function wrapComponent(Component) {
			class Wrapped extends React.Component {
				render() {
					return (
						<Component {...this.props}/>
					);
				}
			}

			return Wrapped;
		};

		let layout = new GoldenLayout(config, this.layout);
		layout.registerComponent('TestComponentContainer',
			wrapComponent(TestComponentContainer)
		);
		layout.registerComponent('TestComponent2',
			wrapComponent(TestComponent2)
		);
		layout.registerComponent('TestComponent3',
			wrapComponent(TestComponent3)
		);
		console.log('LAYOUTS', layout);
		layout.init();

		window.addEventListener('resize', () => {
			layout.updateSize();
		});
	}
	render()
		{
			return (
				<div className='goldenLayout' ref={input => this.layout = input}/>
			);
		}
};