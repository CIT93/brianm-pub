const daily = [
	{
		day: 'monday',
		time: 1400,
		number: 5,
		updates: true,
		message: '',
	},
];

const filters = {
	day: 'monday',
	time: 1400,
	number: 5,
	updates: true,
	message: '',
};

const renderOutput = function (filters) {
	let time = filters.time;
	let number = filters.number;
	let updates = filters.updates;

	if (time >= 1200 && time <= 1600 && number < 3 && updates) {
		filters.message =
			'<h2>It is a perfect time and situation to call mom!</h1><p>Call her now!</h2>';
	} else {
		filters.message =
			'<h1>It is not a good time or situation to call mom</h1><p>Try again tomorrow</h2>';
	}
	
};
const processDaily = function (obj) {
	daily.forEach(function () {
		renderOutput(obj);
	});
};
const loopOverDaily = function () {
	daily.forEach(function (obj) {
		processDaily(obj);
	});
};

loopOverDaily(renderOutput(filters));

document.querySelector('#day-input').addEventListener('input', function (e) {
	console.log(e.target.value);
	filters.day = e.target.value;
});

document
	.querySelector('#time-military')
	.addEventListener('input', function (e) {
		console.log(e.target.value);
		filters.time = Number.parseFloat(e.target.value);
	});

document
	.querySelector('#number-of-times')
	.addEventListener('input', function (e) {
		console.log(e.target.value);
		filters.number = e.target.value;
	});

document.querySelector('#updates').addEventListener('change', function (e) {
	console.log(e.target.checked);
	filters.updates = e.target.checked;
});

document
	.querySelector('#submit-button')
	.addEventListener('click', function (e) {
		e.target.textContent = 'Submitted!';
		renderOutput(filters);
	});

document
	.querySelector('#user-input-form')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		daily.push(filters);
		console.log(filters);

		updateRender(filters);
	});

const updateRender = function (filters) {
	//daily.splice(daily.length + 1, 0, filters);
	loopOverDaily(renderOutput(filters));
	console.log(daily);
	//clearAll(filters);
	let outputMessage = document.createElement('p');
	outputMessage.innerHTML = filters.message;
	document.querySelector('#output').appendChild(outputMessage);
	
};

// const clearAll = function () {
// 	document.querySelector('#output').replaceChildren('');
// };
renderOutput(daily);
//updateRender(filters);

const summaryTitle = document.createElement('h1');
summaryTitle.textContent = 'Should You Call Your Mom?';
document.querySelector('#header').appendChild(summaryTitle);

