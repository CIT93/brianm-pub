'use strict';
const orderDOM = () => {
	const orderButton = document.querySelector('#order-button');
	orderButton.addEventListener('click', (e) => {
		const order = new Order();
		const orderProcess = order.randOrder();
		let price0 = orderProcess.price0;
		let price1 = orderProcess.price1;
		let price2 = orderProcess.price2;
		let item0 = orderProcess.item0;
		let item1 = orderProcess.item1;
		let item2 = orderProcess.item2;
		let person = orderProcess.person;
		let priceFinal = orderProcess.price;
		runningArr.push(price0);
		runningArr.push(price1);
		runningArr.push(price2);
		let priceTotal = parseInt(findSum(runningArr, runningArr.length));
		const output = document.getElementById('output');
		let total = document.getElementById('total');
		output.innerHTML += `<u>${person}</u> placed an order for <li>${item0} - ${price0}<li>${item1} - ${price1}<li>${item2} - ${price2}<br /> with a cost of <b>${priceFinal}</b> <br />`;

		total.innerHTML = `<h1>Total Order Cumulative Cost: <b><u>${priceTotal}</u></b></h1>`;
	});
};
