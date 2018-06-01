export function incrementCount(state) {
	return state.update('count', count => count + 1);
}

export function decrementCount(state) {
	return state.update('count', count => count - 1);
}

export function changeTableTada(state, action) {
	return Object.assign({}, state, {
		tableData: action.tableData
	})
}