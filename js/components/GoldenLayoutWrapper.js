import React from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import GoldenLayout from 'golden-layout';
import {TestComponentContainer} from "./TestComponentContainer";
import {TestComponentConnected} from "./TestComponent";
import {TestComponent2} from "./TestComponent2";
import {TestComponent3} from "./TestComponent3";
import PropTypes from 'prop-types';

class GoldenLayoutWrapper extends React.Component {
	static contextTypes = {
		store: PropTypes.object,
	};
	constructor(props, context){
		super(props);
		console.log('constructor', context.store.getState());
	}
	componentDidMount() {
		const config = {
			settings: {
				hasHeaders: true,
				showCloseIcon: true,
				popoutWholeStack: true,
				blockedPopoutsThrowError: true
			},
			content: [{
				type: 'column',
				content: [
					{
						type: 'react-component',
						component: 'TestComponentContainer',
						props: { label: 'A' }
					}, {
						type: 'react-component',
						component: 'TestComponent2',
						props: { label: 'B' }
					}, {
						type: 'react-component',
						component: 'TestComponent3',
						props: { label: 'dhsgflkjdsglgkjhdslkgj' }
					}
				]
			}]
		};

		function wrapComponent(Component, context) {
			class Wrapped extends React.Component {
				render() {
					return (
						<Provider store = {context}>
							<Component {...this.props}/>
						</Provider>
					);
				}
			}

			return Wrapped;
		};


		let savedState = localStorage.getItem( 'savedState' );

		if( savedState !== null ) {
			this.layout = new GoldenLayout( JSON.parse( savedState ),this.layouts );
		} else {
			this.layout = new GoldenLayout( config, this.layouts );
		}

		this.layout.registerComponent('TestComponentContainer',
			wrapComponent(TestComponentContainer, this.context.store)
		);
		this.layout.registerComponent('TestComponentConnected',
			wrapComponent(TestComponentConnected, this.context.store)
		);
		this.layout.registerComponent('TestComponent2',
			wrapComponent(TestComponent2, this.context.store)
		);
		this.layout.registerComponent('TestComponent3',
			wrapComponent(TestComponent3, this.context.store)
		);
		// window.glEventHub = this.layout.eventHub;
		this.layout.init();

		function addMenuItem(text, layout, ComponentName) {
			let el = $( '<li class="block-widget">' + text + '</li>' );
			$( '#menuContainer' ).append( el );

			let newItemConfig = {
				type: 'react-component',
				component: ComponentName,
				componentState: { text: text }
			};
			layout.createDragSource( el, newItemConfig );
		}

		this.layout.on('stateChanged', (e) => {
			// TODO need write method to update layout size
		});

		addMenuItem( 'Add pie chart', this.layout, 'TestComponent2' );
		addMenuItem( 'Add table', this.layout, 'TestComponentConnected' );
	}

	popupCreated() {
		this.layout.createPopout(
			{
				type: 'react-component',
				title: 'super title',
				component: 'TestComponentConnected',
				props: { label: 'B' },
			}, {
				width: 800,
				height: 800,
				left: 400,
				top: 100
			}
		);
	}
	saveStatus(){
		let state = JSON.stringify(
			this.layout.toConfig() );
		localStorage.setItem( 'savedState', state );

	}
	render(){
		const {store} = this.props;
		console.log(store);
		return (
				<div className="container">
					<ul id="menuContainer"></ul>
					<button onClick={this.saveStatus.bind(this)}>Save layout</button>
					<button onClick={this.popupCreated.bind(this)}>create popup layout</button>
					<div className='goldenLayout' ref={input => {this.layouts = input}}/>
				</div>

			);
		}
};

GoldenLayoutWrapper.propsTypes = {
	store: PropTypes.object
};

function mapStateToProps(state) {
	return {
		store: state
	}
}

export const GoldenLayoutWrapperConnected = connect(mapStateToProps)(GoldenLayoutWrapper);
// export default GoldenLayoutWrapper