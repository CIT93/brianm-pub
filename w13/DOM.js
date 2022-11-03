'use strict';
const orderDOM = () => {
	const orderDiv = document.createElement('div');
	const outputDiv = document.createElement('div');
	outputDiv.setAttribute('id', 'output');
	const outputTotalDiv = document.createElement('div');
	outputTotalDiv.setAttribute('id', 'total');
	const orderButton = document.createElement('button');
	orderButton.setAttribute('id', 'order');
	orderButton.textContent = 'Order Products';
	document.body.appendChild(orderDiv);
	document.body.appendChild(outputDiv);
	document.body.appendChild(outputTotalDiv);
	orderDiv.appendChild(orderButton);
	orderButton.addEventListener('click', (e) => {
		const order = new Order().randOrder();
		let price = order.price;
        let person = order.person
		const output = document.getElementById('output');
		let total = document.getElementById('total');
		output.innerHTML += `${person} placed an order for ${order.item} with a cost of ${order.price} <br />`;
		runningArr.push(price);
		let priceTotal = findSum(runningArr, runningArr.length);
		//let lastIndex = priceTotal.slice(-1);
		total.innerHTML = `<h1>Total Order Cumulative Cost: <b><u>${priceTotal}</u></b></h1>`;
	});
};
