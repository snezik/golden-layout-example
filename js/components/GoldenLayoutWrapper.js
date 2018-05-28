import React from 'react';
import {Provider} from 'react-redux';
import GoldenLayout from 'golden-layout';
import {TestComponentContainer} from "./TestComponentContainer";
import {TestComponent2} from "./TestComponent2";
import {TestComponent3} from "./TestComponent3";
import createReactContext from 'react'
import {connect} from 'react-redux';
export const WrapperContext = React.createContext({test:'test'});
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
					component: 'TestComponent2',
					props: { label: 'B' },
				}, {
					type: 'react-component',
					component: 'TestComponent3',
					props: { label: 'dhsgflkjdsglgkjhdslkgj' }
				}]
			}]
		};

		function wrapComponent(Component) {
			class Wrapped extends React.Component {
				render() {
					return (
						<WrapperContext.Provider store = {this}>
							<Component {...this.props}/>
						</WrapperContext.Provider>
					);
				}
			}

			return Wrapped;
		};

		// function addMenuItem( text ) {
		// 	debugger
		//
		// 	//
		//
		// 	//insertion code will go here
		// };



		let savedState = localStorage.getItem( 'savedState' );

		if( savedState !== null ) {
			this.layout = new GoldenLayout( JSON.parse( savedState ),this.layouts );
		} else {
			this.layout = new GoldenLayout( config, this.layouts );
		}
		// this.layout = new GoldenLayout(config, this.layouts);
		this.layout.registerComponent('TestComponentContainer',
			wrapComponent(TestComponentContainer)
		);
		this.layout.registerComponent('TestComponent2',
			wrapComponent(TestComponent2,)
		);
		this.layout.registerComponent('TestComponent3',
			wrapComponent(TestComponent3)
		);
		console.log('CONTEXT', this.context);
		this.layout.init();

		function addMenuItem(text, layout) {
			let el = $( '<li>' + text + '</li>' );
			$( '#menuContainer' ).append( el );
			let newItemConfig = {
				type: 'react-component',
				component: 'TestComponent2',
				componentState: { text: text }
			};
			layout.createDragSource( el, newItemConfig );
		}

		this.layout.on('stateChanged', (e) => {
			console.log(this.layout.toConfig())
		});

		addMenuItem( 'User added component A', this.layout );
		// addMenuItem( 'User added component B' ).bind(this);

	}
	saveStatus(){
		let state = JSON.stringify(
			this.layout.toConfig() );
		localStorage.setItem( 'savedState', state );

	}
	render(){
			const {store} = this.props;
			return (
				<div className="container">
					<ul id="menuContainer"></ul>
					<button onClick={this.saveStatus.bind(this)}>Save layout</button>
					<div className='goldenLayout' ref={input => {this.layouts = input}}/>
				</div>

			);
		}
};
// GoldenLayoutWrapper.contextTypes = {
// 	store: React.PropTypes.object
// };

function mapStateToProps(state) {
	return {
		store: state
	}
}

export default GoldenLayoutWrapper = connect(mapStateToProps)(GoldenLayoutWrapper);
// export default GoldenLayoutWrapper