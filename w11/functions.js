//gets data from saved storage
const getSavedDaily = () => {
	const dailyJSON = localStorage.getItem('daily');
	return dailyJSON ? JSON.parse(dailyJSON) : [];
};

//saves to local storage
const saveDaily = (daily) =>
	localStorage.setItem('daily', JSON.stringify(daily));

//logic calculations
const logicCalc = (dailyPushable) => {
	//sets daily.message
	if (
		dailyPushable.time >= 1200 &&
		dailyPushable.time <= 1600 &&
		dailyPushable.number < 3 &&
		dailyPushable.number >= 0
	) {
		return (dailyPushable.message =
			'<h1>It is a perfect time and situation to call mom!</h1><h2><p>Call her now!</h2>');
	} else if (
		dailyPushable.time >= 1200 &&
		dailyPushable.time <= 1600 &&
		dailyPushable.number < 4 &&
		dailyPushable.number >= 0
	) {
		return (dailyPushable.message =
			'<h1>It is not the best time to call mom</h1><p><h2>See if it can wait.</h2>');
	} else if (dailyPushable.updates) {
		return (dailyPushable.message =
			'<h1>Since you have important updates.</h1><h2>Keep it quick!</h2>');
	} else {
		return (dailyPushable.message =
			'<h1>Do not call your mom, its not a good situation.</h1><h2>Try again another day.</h2>');
	}
};

//handles finding index of the element to be removed then saves and rerenders local storage
const removeDaily = (id) => {
	const dailyIndex = daily.findIndex((daily) => daily.id == id);

	if (dailyIndex > -1) {
		daily.splice(dailyIndex, 1);
		saveDaily(daily);
		renderDaily(daily);
	}
};

//Get the DOM elements for an individual return
const generateDailyDOM = (daily) => {
	const dailyDiv = document.createElement('div');
	const dailySpan = document.createElement('span');
	const dailyRem = document.createElement('button');
	const dailyRate = document.createElement('a');
	const rated = document.createElement('span');

	//setup the remove button
	dailyRem.textContent = 'x';
	dailyRem.addEventListener('click', () => removeDaily(daily.id));

	//setup rate linking
	dailyRate.setAttribute('href', `edit.html#${daily.id}`);
	dailyRate.innerHTML = `Rate your call for this time`;

	//setup rated validation
	daily.rating
		? (rated.innerHTML = `<h3>Your Rating for this call was: <u>${daily.rating.toUpperCase()}</u></h3>`)
		: (rated.innerHTML = '');

	//setup the daily text
	dailySpan.innerHTML = daily.message;
	dailyDiv.appendChild(dailySpan);

	//appends remove button to span containing daily message
	dailySpan.appendChild(dailyRem);

	//appends rating linking
	dailyDiv.appendChild(dailyRate);

	//append rated span
	dailyDiv.appendChild(rated);

	return dailyDiv;
};

//updates the render
const renderDaily = (daily) => {
	const filteredDaily = daily.filter((daily) => {
		if (!daily.length) {
			return daily.id.length;
		}
	});

	document.querySelector('#output').innerHTML = '';

	filteredDaily.forEach((daily) => {
		const dailyEl = generateDailyDOM(daily);
		document.querySelector('#output').appendChild(dailyEl);
	});
};

//Generate Last edited message
const generateLastEdited = (timestamp) => {
	return `Last Edited: ${moment(timestamp).fromNow()}`;
};

let generateMainDOM = () => {
	const mainDiv = document.createElement('div');
	const lineBreak = document.createElement('br');
	const mainForm = document.createElement('form');
	mainForm.setAttribute('id', 'user-input-form');

	const daysLabel = document.createElement('label');
	daysLabel.textContent = 'Choose which day:';

	const days = document.createElement('input');
	days.setAttribute('type', 'date');
	days.setAttribute('name', 'day');
	days.setAttribute('id', 'day-input');
	days.setAttribute('value', moment().toISOString(true))

	const timeLabel = document.createElement('label');
	timeLabel.textContent = 'Time in Military Standard'
	const time = document.createElement('input'); //id="time-military" type="time" name="time"
	time.setAttribute('id', 'time-military');
	time.setAttribute('type', 'time');
	time.setAttribute('name', 'time');
	time.setAttribute('value', moment().toISOString(true))

	const number = document.createElement(''); //"number-of-times" type="textbox" name="number" value="0"
	number.setAttribute('id', 'number-of-times');
	number.setAttribute('type', );
	number.setAttribute('');
	number.setAttribute('');

	
	

	document.querySelector('body').appendChild(mainDiv);
	mainDiv.appendChild(mainForm);
	mainForm.appendChild(daysLabel);
	daysLabel.appendChild(days);
	mainForm.appendChild(lineBreak);
	mainForm.appendChild(timeLabel);
	timeLabel.appendChild(time)


	return mainDiv;
};