'use strict';
mainDOM();
const mainDiv = document.querySelector('#maindiv');

document.getElementById('gettodos').addEventListener('click', () => {
	getTodos()
		.then((todos) => {
			getStructure(todos);
		})
		.then((todos) => {
			showAll(todos);
		})
		.catch((err) => {
			console.log(`Error: ${err}`);
		});
});
document.getElementById('completed').addEventListener('change', () => {
	if (document.getElementById('completed').checked) {
		document.getElementById('incomplete').checked = false;
	}
	if (document.getElementById('completed').checked) {
		getTodos()
			.then((todos) => {
				getStructure(todos);
			})
			.then((todos) => {
				showCompleted(todos);
			})
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	} else {
		getTodos()
			.then((todos) => {
				getStructure(todos);
			})
			.then((todos) => {
				showAll(todos);
			})
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	}
});
document.getElementById('incomplete').addEventListener('change', () => {
	if (document.getElementById('incomplete').checked) {
		document.getElementById('completed').checked = false;
	}
	if (document.getElementById('incomplete').checked) {
		getTodos()
			.then((todos) => {
				getStructure(todos);
			})
			.then((todos) => {
				showIncomplete(todos);
			})
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	} else {
		getTodos()
			.then((todos) => {
				getStructure(todos);
			})
			.then((todos) => {
				showAll(todos);
			})
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	}
});
const showCompleted = () => {
	const completed = document.querySelectorAll('div');
	completed.forEach((todo) => {
		if (todo.textContent.includes('true')) {
			todo.style.display = 'block';
			todo.setAttribute('class', 'done');
		} else {
			todo.style.display = 'none';
		}
	});
};
const showIncomplete = () => {
	const incomplete = document.querySelectorAll('div');
	incomplete.forEach((todo) => {
		if (todo.textContent.includes('false')) {
			todo.style.display = 'block';
			todo.setAttribute('class', 'incomplete');
		} else {
			todo.style.display = 'none';
		}
	});
};
const showAll = () => {
	const all = document.querySelectorAll('div');
	all.forEach((todo) => {
		if (todo.textContent.includes('User')) {
			todo.style.display = 'block';
			todo.setAttribute('class', 'all');
		} else {
			todo.style.display = 'none';
		}
	});
};
