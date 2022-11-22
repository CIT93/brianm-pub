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
        document.getElementById('incomplete').checked = false
    }
	if (document.getElementById('completed').checked && document.getElementById('incomplete').checked === false) {
		getTodos()
			.then((todos) => {
				getStructure(todos);
			}).then((todos) => {
                showAll(todos);
                showCompleted(todos);
            })
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	} else if (document.getElementById('completed').checked && document.getElementById('incomplete').checked) {
		getTodos()
		.then((todos) => {
			getStructure(todos);
		})
        .then((todos) => {
            showCompleted(todos);
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
document.getElementById('incomplete').addEventListener('change', () => {
    if (document.getElementById('incomplete').checked) {
        document.getElementById('completed').checked = false
    }
	if (document.getElementById('incomplete').checked && document.getElementById('completed').checked === false) {
		getTodos()
			.then((todos) => {
				getStructure(todos);
			}).then((todos) => {
                showAll(todos)
                showIncomplete(todos)
            })
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	} else if (document.getElementById('completed').checked && document.getElementById('incomplete').checked) {
		getTodos()
		.then((todos) => {
			getStructure(todos);
		})
        .then((todos) => {
            showCompleted(todos);
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
			todo.setAttribute('class', 'incomplete');
		} else {
			//todo.style.display = 'none';
		}
	});
};
const showAll = () => {
    const all = document.querySelectorAll('div');
    all.forEach((todo) => {
        if (todo.textContent.includes('true') || todo.textContent.includes('false')) {
            todo.setAttribute('class', 'all');
        } else {
            //todo.style.display = 'none';
        }
    })
}
// document.getElementById('user-button').addEventListener('click', () => {
//     getTodos()
//     .then((todos) => {
//         getStructure(todos);
//     })
//     .then((todos) => {
//         showAll(todos);
//     })
//     .then((todos) => {
//         userFilter(todos)
//     })
//     .catch((err) => {
//         console.log(`Error: ${err}`);
//     });
    
// })
// const userFilter = () => {
//     getTodos()
//     .then((todos) => {
//         getStructure(todos)
//     })
//     .then((todos) => {
//         let user = document.querySelector('user').value
//         user.forEach((todo) => {
//             if (todo.userId === 1) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 2) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 3) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 4) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 5) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 6) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 7) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 8) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 9) {
//                 todo.setAttribute('class', 'user');
//             } else if (todo.userId === 10) {
//                 todo.setAttribute('class', 'user');
//             } else {
//                 todo.style.display = 'none'
//             }
//     })
//     })
// }
