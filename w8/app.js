const daily = [{}];

const filters = {};

const summaryTitle = document.createElement('h1');
summaryTitle.textContent = 'Should You Call Your Mom?';
document.querySelector('#header').appendChild(summaryTitle);

const updateRender = function (filters) {
	console.log(daily);
	let outputMessage = document.createElement('p');
	outputMessage.innerHTML = filters.message;
	document.querySelector('#output').appendChild(outputMessage);
};

document
	.querySelector('#user-input-form')
	.addEventListener('submit', function (e) {
		e.preventDefault();

		filters.day = e.target.querySelector('#day-input').value;
		filters.time = e.target.querySelector('#time-military').value;
		filters.number = e.target.querySelector('#number-of-times').value;
		filters.updates = e.target.querySelector('#updates').checked;

		if (
			filters.time >= 1200 &&
			filters.time <= 1600 &&
			filters.number < 3 &&
			filters.updates
		) {
			filters.message =
				'<h1>It is a perfect time and situation to call mom!</h1><h2><p>Call her now!</h2>';
		} else if (
			filters.time >= 0600 &&
			filters.time <= 0900 &&
			filters.number < 5 &&
			filters.updates
		) {
			filters.message =
				'<h1>It is not the best time to call mom</h1><p><h2>See if it can wait.</h2>';
		} else {
			filters.message =
				'<h1>Do not call your mom, its not a good situation.</h1><p><h2>Try again another day.</h2>';
		}

		const dailySummary = document.createElement('h3');
		dailySummary.innerHTML = `${filters.day} ${filters.time} ${filters.number} ${filters.updates}`;
		document.querySelector('#output').appendChild(dailySummary);

		//daily.push(filters);
		daily.splice(daily.length, 0, filters);
		console.log(filters);
		updateRender(daily[daily.length - 1]);
	});


