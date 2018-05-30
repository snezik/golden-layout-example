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

		this.layout.init();

		function addMenuItem(text, layout) {
			let el = $( '<li class="block-widget">' + text + '</li>' );
			$( '#menuContainer' ).append( el );
			let newItemConfig = {
				type: 'react-component',
				component: 'TestComponent2',
				componentState: { text: text }
			};
			layout.createDragSource( el, newItemConfig );
		}
		this.layout.on('stackCreated', (stack)=> {
			let label = 'custom open at new window';

			let popout = function() {

				let item = stack.header.activeContentItem;

				let parentId = stack.parent.config.id;
				let indexInParent = stack.contentItems.findIndex(e => e.config.id == item.config.id);

				stack.removeChild( item, true );

				console.log(this);

				// display_popup(item, parentId, indexInParent, stack);


			};


			new GoldenLayout.__lm.controls.HeaderButton( stack.header, label, 'lm_popout', popout );
			let ctrlsCtr = stack.header.controlsContainer[0];
			let openWinIcon = ctrlsCtr.lastChild;
			$(openWinIcon).insertBefore(ctrlsCtr.firstChild);
		}, this);
		function display_popup(item, parentId, indexInParent, stack){
			this.layout.createPopout(
				{
					type: 'react-component',
					componentName: 'TestComponent2',
					props: { label: 'B' },
					componentState: { text: 'Component 2' }
				}, {
					width: 200,
					height: 300,
					left: 400,
					top: 100
				}
			);
		}
		this.layout.on('stateChanged', (e) => {
			// console.log(this.layout.toConfig())
		});

		addMenuItem( 'Add pie chart', this.layout );
		// addMenuItem( 'User added component B' ).bind(this);

	}

	popupCreated() {
		this.layout.createPopout(
			{
				type: 'react-component',
				title: 'super title',
				component: 'TestComponent2',
				props: { label: 'B' },
			}, {
				width: 200,
				height: 300,
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