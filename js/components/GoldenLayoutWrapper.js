import React from 'react';
import {Provider} from 'react-redux';
import GoldenLayout from 'golden-layout';
import {TestComponentContainer} from "./TestComponentContainer";
import {IncrementButtonContainer} from "./TestComponent2";
import {TestComponent3} from "./TestComponent3";

class GoldenLayoutWrapper extends React.Component {

	componentDidMount() {
		const config = {
			settings: {
				hasHeaders: true,
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
					component: 'IncrementButtonContainer',
					props: { label: 'B' },
				}, {
					type: 'react-component',
					component: 'TestComponent3',
					props: { label: 'dhsgflkjdsglgkjhdslkgj' }
				}]
			}]
		};

		function wrapComponent(Component, store) {
			class Wrapped extends React.Component {
				render() {
					return (
						<Provider store={store}>
							<Component {...this.props}/>
						</Provider>
					);
				}
			}

			return Wrapped;
		};

		let layout = new GoldenLayout(config, this.layout);
		layout.registerComponent('TestComponentContainer',
			wrapComponent(TestComponentContainer)
		);
		layout.registerComponent('IncrementButtonContainer',
			wrapComponent(IncrementButtonContainer, this.context.store)
		);
		layout.registerComponent('TestComponent3',
			wrapComponent(TestComponent3)
		);
		console.log('CONTEXT', this.context);
		debugger
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
// GoldenLayoutWrapper.contextTypes = {
// 	store: React.PropTypes.object
// };

export default GoldenLayoutWrapper