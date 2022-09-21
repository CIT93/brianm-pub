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

let isAppropriate = function (obj) {
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
	//return isAppropriate
};

const processDaily = function (obj) {
	daily.forEach((element) => {
		isAppropriate(obj.day);
		isAppropriate(obj.time);
		isAppropriate(obj.number);
		isAppropriate(obj.updates);
		isAppropriate(obj.message);
	});
};

const loopOverDaily = function (test) {
	daily.forEach(function (obj) {
		processDaily(obj);
	});
	//return daily
};
const test = {
	day: 'monday',
	time: 1400,
	number: 2,
	updates: true,
	message: 'testing',
};

const summaryTitle = document.createElement('h1');
summaryTitle.textContent = `List of variables that influence method:`;
const pDay = document.createElement('p');
const pTime = document.createElement('p');
const pNumber = document.createElement('p');
const pUpdates = document.createElement('p');
const pBold = document.createElement('div.bold');
//const bold = document.querySelector('.bold');
loopOverDaily(isAppropriate(test));
//pDay.textContent = pBold + pDay;



pDay.textContent = `

Day --> The day of the week. --> ${test.day}

`;

pTime.textContent = `
Time (time of day in military time, ex. 0000-1159) --> ${test.time}

`;
pNumber.textContent = `
Number --> Number of times I've already called this week. --> ${test.number}

`;
pUpdates.textContent = `
Updates --> Do I have any important updates to tell her? --> ${test.updates}
`;

//const summary = document.createElement('h3').appendChild(pDay).appendChild(pTime).appendChild(pNumber).appendChild(pUpdates);

document.querySelector('body').appendChild(summaryTitle);
document.querySelector('body').appendChild(pDay);
document.querySelector('body').appendChild(pTime);
document.querySelector('body').appendChild(pNumber);
document.querySelector('body').appendChild(pUpdates);





document.querySelector('.button').addEventListener('click', function (e) {
	e.target.textContent = 'the button was clicked';
});