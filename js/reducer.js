import {Map} from 'immutable';
import {
	incrementCount,
	decrementCount,
	changeTableTada
} from './core';

function setState(state, newState) {
	return state.merge(newState);
}

export default function(state = Map(), action) {
	switch(action.type) {
		case 'SET_STATE':
			return setState(state, action.state);
		case 'INCREMENT_COUNT':
			return incrementCount(state);
		case 'DECREMENT_COUNT':
			return decrementCount(state);
		case 'GET_NEW_DATA':
			return changeTableTada(state);
		case 'RECEIVE_POSTS':
			return changeTableTada(state, action);
	}
	return state;
}