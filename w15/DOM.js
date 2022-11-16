'use strict';
const mainDOM = () => {
	const mainDiv = document.createElement('div');
	mainDiv.setAttribute('id', 'maindiv');
	const dataP = document.createElement('p');
	dataP.setAttribute('id', 'data');
	document.body.appendChild(mainDiv);
	mainDiv.appendChild(dataP);
};
