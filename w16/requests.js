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
//structure todos
const getStructure = (todos) => {
	const list = document.querySelector('#maindiv');
	todos.forEach((todo) => {
		const div = document.createElement('div');
		div.setAttribute('class', 'all');
		div.innerHTML = `<h3>User: ${todo.userId}</h3> Title: ${todo.title} <br />Entry Index: ${todo.id}<br />Completed: ${todo.completed}`;
		list.appendChild(div);
	});
};
