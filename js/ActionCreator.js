export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}
export function GetTableData(tableData) {
	return {
		type: 'GET_TABLE_DATA',
		tableData: tableData
	};
}

export function getNewDataForTable() {
	return {
		type: 'GET_NEW_DATA'
	};
}
function receivePosts(json){
	return {
		type: 'RECEIVE_POSTS',
		tableData: json,
	}
}
export function fetchPosts() {
	return function (dispatch) {
		return fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(json =>{
				dispatch(receivePosts(json));
				return json
			})
			.then(json => console.log(json))

	}

}
export function incrementCount() {
	return {
		type: 'INCREMENT_COUNT'
	};
}

export function decrementCount() {
	return {
		type: 'DECREMENT_COUNT'
	};
}
