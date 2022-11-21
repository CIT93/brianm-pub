'use strict';
const mainDOM = () => {
	const mainDiv = document.createElement('div');
	mainDiv.setAttribute('id', 'maindiv');
	const dataP = document.createElement('p');
	dataP.setAttribute('id', 'data');
    const button = document.createElement('button');
    button.setAttribute('id', 'gettodos');
    button.textContent = 'Get Todos List'
	document.body.appendChild(mainDiv);
	mainDiv.appendChild(dataP);
    mainDiv.appendChild(button);
};