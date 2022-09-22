//const decisionDaily = [1400, 5, true, 'test'];
const daily = [
	{
		day: 'monday',
		time: 1400,
		number: 5,
		updates: true,
		message: 'test',
	},
	{
		day: 'tuesday',
		time: 1400,
		number: 5,
		updates: true,
		message: 'test',
	},
];

const isAppropriate = function (obj) {
	if (obj.time >= 1200 && obj.time <= 1600 && obj.number < 3 && obj.updates) {
		obj.message =
			'<h1>It is a perfect time and situation to call mom!</h1><p>Call her now!';
		return obj.message;
	} else if (
		obj.time >= 0600 &&
		obj.time <= 1159 &&
		obj.number < 3 &&
		obj.updates
	) {
		obj.message =
			'<h1>It is not the best time to call, but if its important</h1><p>Try to reach her';
		return obj.message;
	} else {
		obj.message =
			'<h1>It is not a good time or situation to call mom</h1><p>Try again tomorrow';
		return obj.message;
	}
};

const processDaily = function (obj) {
	daily.forEach(function () {
		isAppropriate(obj.day);
		isAppropriate(obj.time);
		isAppropriate(obj.number);
		isAppropriate(obj.updates);
		isAppropriate(obj.message);
	});
};

const loopOverDaily = function () {
	daily.forEach(function (obj) {
		processDaily(obj);
	});
};
let data = {
	day: 'Tuesday',
	time: 1400,
	number: 2,
	updates: true,
	message: 'testing',
};



loopOverDaily(isAppropriate(data));

//when clicking #submit-button, drop in "the button was clicked" on button text and then append data from above to the body
document.querySelector('#submit-button').addEventListener(
	'click',
	function (e) {
		e.target.textContent = 'The form was submitted successfully!';
		const pDay = document.createElement('h4');
		const pDayFormValue = document.getElementById('day-input').value;
		pDay.innerHTML =
			'Day --> The day of the week --><h4>' + pDayFormValue + '</h4>';

		const pTime = document.createElement('h4');
		const pTimeFormValue = document.getElementById('time-military').value;
		pTime.innerHTML =
			'Time --> Military Standard Time (ex. 1400) --><h4>' +
			pTimeFormValue +
			'</h4>';

		const pNumber = document.createElement('h4');
		const pNumberFormValue = document.getElementById('number-of-times').value;
		pNumber.innerHTML =
			'Number --> The number of times called this week --><h4>' +
			pNumberFormValue +
			'</h4>';

		const pUpdates = document.createElement('h4');
		const pUpdatesFormValue = document.getElementById('updates').value;
		pUpdates.innerHTML =
			'Updates --> Any pertinent updates? --><h4>' +
			pUpdatesFormValue +
			'</h4>';

		document.querySelector('body').appendChild(summaryTitle);
		document.querySelector('body').appendChild(pDay);
		document.querySelector('body').appendChild(pTime);
		document.querySelector('body').appendChild(pNumber);
		document.querySelector('body').appendChild(pUpdates);

		data.day.valueOf = pDay.value;
		data.time.valueOf = pTime.value;
		data.number.valueOf = pNumber.value;
		data.updates.valueOf = pUpdates.value;
	},
	{ once: true }
);

const decisionOutput = document.createElement('h2');
decisionOutput.textContent = 'Based on your input, here is the decision';
document.querySelector('body').appendChild(decisionOutput);

const decisionData = document.createElement('h5');
decisionData.innerHTML = `${data.message}`;
document.querySelector('body').appendChild(decisionData);

//create the title for summary
const summaryTitle = document.createElement('h1');
summaryTitle.textContent = `List of variables that influence method:`;
document.querySelector('body').appendChild(summaryTitle);
