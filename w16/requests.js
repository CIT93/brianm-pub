'use strict';
const getTodos = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	if (response.status === 200) {
		const data = await response.json();
		return data;
	} else {
		throw new Error('Unable to get data');
	}
};
//
