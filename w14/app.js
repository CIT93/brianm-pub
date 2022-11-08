'use strict';
orderDOM();
class Order {
	constructor() {
		this.product = [
			'case',
			'ram',
			'motherboard',
			'graphics-card',
			'cpu',
			'fan-kit',
			'psu',
		];
		this.quantity = [0, 0, 0, 0, 0, 0, 0, 0];
		this.person = ['Beth', 'John', 'Timmy', 'Brian', 'Alex', 'Scott', 'Daniel'];
		this.price = [89, 150, 120, 700, 325, 60, 110];
	}
	randOrder() {
		const randIndexPerson = Math.floor(Math.random() * this.person.length);
		const productIndex0 = document.querySelector('#product0').value;
		const index0 = this.product.indexOf(productIndex0);
		const productIndex1 = document.querySelector('#product1').value;
		const index1 = this.product.indexOf(productIndex1);
		const productIndex2 = document.querySelector('#product2').value;
		const index2 = this.product.indexOf(productIndex2);
		const priceIndex0 = this.price[index0];
		const priceIndex1 = this.price[index1];
		const priceIndex2 = this.price[index2];
		const productQuant0 = document.querySelector('#quant0').value;
		const productQuant1 = document.querySelector('#quant1').value;
		const productQuant2 = document.querySelector('#quant2').value;
		const person = this.person[randIndexPerson];
		const item0 = productIndex0;
		const item1 = productIndex1;
		const item2 = productIndex2;
		const price0 = priceIndex0 * productQuant0;
		const price1 = priceIndex1 * productQuant1;
		const price2 = priceIndex2 * productQuant2;
		let priceFinal = price0 + price1 + price2;
		let order = {
			item0: item0,
			item1: item1,
			item2: item2,
			price0: price0,
			price1: price1,
			price2: price2,
			price: priceFinal,
			person: person,
		};
		const output = document.getElementById('output');
		if (productQuant0 === '-') {
			output.setAttribute('class', 'error');
			output.textContent =
				'Please place a minimum order greater or equal to "0" in each section above';
		} else if (productQuant1 === '-') {
			output.setAttribute('class', 'error');
			output.textContent =
				'Please place a minimum order greater or equal to "0" in each section above';
		} else if (productQuant2 === '-') {
			output.setAttribute('class', 'error');
			output.textContent =
				'Please place a minimum order greater or equal to "0" in each section above';
		} else {
			if (
				output.textContent ===
				'Please place a minimum order greater or equal to "0" in each section above'
			) {
				output.textContent = '';
			} else {
				output.setAttribute('class', 'orderOut');
				return order;
			}
		}
	}
}
let runningArr = [];
const findSum = (arr, size) => {
	let sum = 0;
	for (let i = 0; i < size; i++) {
		sum += arr[i];
	}
	return sum;
};
