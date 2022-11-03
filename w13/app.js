'use strict'

orderDOM();
const Order = function (product) {
	this.product = [
		'Case',
        'RAM',
        'Motherboard',
        'Graphics Card',
        'CPU',
        'Fan Kit',
        'PSU',
	];
    this.person = [
        'Beth',
        'John',
        'Timmy',
        'Brian',
        'Alex',
        'Scott',
        'Daniel',
    ]
    this.price = [
        89,
        150,
        120,
        700,
        325,
        60,
        110
    ];


};

Order.prototype.randOrder = function () {
    const randIndexProduct = Math.floor(Math.random() * this.product.length);
    const randIndexPerson = Math.floor(Math.random() * this.person.length);
    const randIndexPrice = Math.floor(Math.random() * this.price.length);
    const person = this.person[randIndexPerson]
    const item = this.product[randIndexProduct];
    let price = this.price[randIndexPrice];
    let order = {
        item: item,
        price: price,
        person: person,
    }
    return order
}
let runningArr = []
const findSum = (arr, size) => {
    let sum = 0;
    for (let i=0; i<size; i++) {
        sum += arr[i]
    }
    return sum;
}