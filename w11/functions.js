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
	mainDiv.setAttribute('id', 'header')

	const lineBreak1 = document.createElement('br');
	const lineBreak2 = document.createElement('br');
	const lineBreak3 = document.createElement('br');
	const lineBreak4 = document.createElement('br');
	const mainForm = document.createElement('form');
	mainForm.setAttribute('id', 'user-input-form');

	const daysLabel = document.createElement('label');
	daysLabel.textContent = 'Choose which day:';

	const days = document.createElement('input');
	days.setAttribute('type', 'date');
	days.setAttribute('name', 'day');
	days.setAttribute('id', 'day-input');
	//days.setAttribute('value', moment().toISOString(true))
	//days.setAttribute('placeholder', moment().get('date'))
	days.setAttribute('required', 'true')

	const timeLabel = document.createElement('label');
	timeLabel.textContent = 'Time in Military Standard'
	const time = document.createElement('input'); 
	time.setAttribute('id', 'time-military');
	time.setAttribute('type', 'time');
	time.setAttribute('name', 'time');
	//time.setAttribute('value', moment().toISOString(true))
	//time.setAttribute('placeholder', moment().get('hours'))
	time.setAttribute('required', 'true')

	const number = document.createElement('input'); 
	number.setAttribute('id', 'number-of-times');
	number.setAttribute('type', 'number');
	number.setAttribute('name', 'number');
	number.setAttribute('value', 0);
	number.setAttribute('required', 'true')

	const updatesLabel = document.createElement('label');
	updatesLabel.textContent = 'Do I have any pertinent updates to give?'
	const updates = document.createElement('input'); 
	updates.setAttribute('id', 'updates');
	updates.setAttribute('type', 'checkbox');
	updates.setAttribute('name', 'updates');

	const submitButton = document.createElement('button'); 
	submitButton.textContent = 'Submit';
	submitButton.setAttribute('id', 'submit-button');
	submitButton.setAttribute('class', 'button');

	const summaryTitle = document.createElement('h1');
	summaryTitle.textContent = 'Should You Call Your Mom?';

	const blankTime = document.createElement('div');
	blankTime.setAttribute('class', 'error');
	blankTime.setAttribute('id', 'blank-time')

	const blankNumber = document.createElement('div');
	blankNumber.setAttribute('id', 'blank-number');
	blankNumber.setAttribute('class', 'error')

	const blankDay = document.createElement('div');
	blankDay.setAttribute('class', 'error');
	blankDay.setAttribute('id', 'blank-day')
	
	const output = document.createElement('div');
	output.setAttribute('id', 'output')

	//append mainDiv from above to the body section of the html page
	document.querySelector('body').appendChild(mainDiv);
	mainDiv.appendChild(summaryTitle)
	mainDiv.appendChild(mainForm);
	mainForm.appendChild(daysLabel);
	daysLabel.appendChild(days);
	daysLabel.appendChild(lineBreak1);
	mainForm.appendChild(timeLabel);
	timeLabel.appendChild(time);
	timeLabel.appendChild(lineBreak2);
	mainForm.appendChild(number);
	mainForm.appendChild(lineBreak3);
	mainForm.appendChild(updatesLabel);
	updatesLabel.appendChild(updates);
	mainForm.appendChild(lineBreak4);
	mainForm.appendChild(submitButton);
	
	mainDiv.appendChild(blankTime);
	mainDiv.appendChild(blankNumber);
	mainDiv.appendChild(output);



	return mainDiv;
};
const generateEditPageDOM = () => {
	const mainDiv = document.createElement('div');
	const homeLink = document.createElement('a');
	homeLink.setAttribute('href', 'index.html');
	homeLink.textContent = '<< Go Back';

	const dailyID = document.createElement('h1');
	dailyID.setAttribute('id', 'title')

	const editBody = document.createElement('h2');
	editBody.setAttribute('id', 'body');

	const rateSpan = document.createElement('span');
	rateSpan.setAttribute('id', 'rate');

	const updateSpan = document.createElement('span');
	updateSpan.setAttribute('id', 'update');

	const remButton = document.createElement('button');
	remButton.setAttribute('id', 'remove');
	remButton.textContent = 'Remove Entry';

	const rateForm = document.createElement('form');
	rateForm.setAttribute('id', 'rate-form');

	const rateLabel = document.createElement('label');
	rateLabel.setAttribute('id', 'rating');
	rateLabel.textContent = 'Please rate this phone call:';

	const rateSelect = document.createElement('select');
	rateSelect.setAttribute('name', 'rate');

	const opt1 = document.createElement('option');
	opt1.setAttribute('value', 'excellent');
	opt1.textContent = 'Excellent';

	const opt2 = document.createElement('option');
	opt2.setAttribute('value', 'good');
	opt2.textContent = 'Good';

	const opt3 = document.createElement('option');
	opt3.setAttribute('value', 'meh');
	opt3.textContent = 'Meh';

	const opt4 = document.createElement('option');
	opt4.setAttribute('value', 'bad');
	opt4.textContent = 'Bad';

	const rateSub = document.createElement('button');
	rateSub.setAttribute('id', 'rate-submit');
	rateSub.textContent = 'Submit Rating';
	
	const output = document.createElement('div');
	output.setAttribute('id', 'output');
	

	document.querySelector('body').appendChild(mainDiv);
	mainDiv.appendChild(homeLink);
	mainDiv.appendChild(dailyID);
	mainDiv.appendChild(editBody);
	mainDiv.appendChild(rateSpan);
	mainDiv.appendChild(updateSpan);
	
	mainDiv.appendChild(remButton);
	mainDiv.appendChild(rateForm);
	rateForm.appendChild(rateLabel);
	rateForm.appendChild(rateSelect);

	rateSelect.appendChild(opt1);
	rateSelect.appendChild(opt2);
	rateSelect.appendChild(opt3);
	rateSelect.appendChild(opt4);

	rateForm.appendChild(rateSub);

	mainDiv.appendChild(output);




	return mainDiv
};