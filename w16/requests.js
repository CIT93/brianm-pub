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
	const list = document.querySelector('#right-div');
	todos.forEach((todo) => {
		const div = document.createElement('div');
		div.setAttribute('class', 'right');
		//div.setAttribute('class', 'all');
		div.innerHTML = `<h3 id="user" class="left">User: ${todo.userId}</h3> <h4 class="right" id="right">Title: ${todo.title} <br />Entry Index: ${todo.id}<br />Completed: ${todo.completed}</h4>`;
		list.appendChild(div);
	});
};
