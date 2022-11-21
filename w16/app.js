'use strict';
mainDOM();
const mainDiv = document.querySelector('#maindiv');
document.getElementById('gettodos').addEventListener('click', (e) => {
	getTodos()
		.then((todos) => {
			const list = document.querySelector('#maindiv');
			todos.forEach((todo) => {
				const div = document.createElement('div');
				div.setAttribute('class', 'notDone');
				todo.completed
					? div.setAttribute('class', 'done')
					: div.setAttribute('class', 'notDone');
				div.innerHTML = `<h3>User: ${todo.userId}</h3> Title: ${todo.title} <br />Entry Index: ${todo.id}<br />Completed: ${todo.completed}`;
				list.appendChild(div);
			});
		})
		.catch((err) => {
			console.log(`Error: ${err}`);
		});
});
