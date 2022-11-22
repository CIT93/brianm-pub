'use strict';
const mainDOM = () => {
	const mainDiv = document.createElement('div');
	mainDiv.setAttribute('id', 'maindiv');
	mainDiv.setAttribute('class', 'main')
	const leftDiv = document.createElement('div');
	leftDiv.setAttribute('id', 'left-div');
	leftDiv.setAttribute('class', 'left')
	const rightDiv = document.createElement('div');
	rightDiv.setAttribute('id', 'right-div');
	rightDiv.setAttribute('class', 'right')
	const dataP = document.createElement('p');
	dataP.setAttribute('id', 'data');
    const button = document.createElement('button');
    button.setAttribute('id', 'gettodos');
    button.textContent = 'Get Todos List'
	document.body.appendChild(mainDiv);
	mainDiv.appendChild(leftDiv)
	mainDiv.appendChild(rightDiv)
	mainDiv.appendChild(dataP);
    mainDiv.appendChild(button);
};