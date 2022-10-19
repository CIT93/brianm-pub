let daily = getSavedDaily();
generateMainDOM();
renderDaily(daily);





document.querySelector('#user-input-form').addEventListener('submit', (e) => {
	e.preventDefault();
	const id = uuidv4();
	const timestamp = moment().valueOf();
	const days = moment(e.target.elements.day.value).days(String);

	let time = e.target.elements.time.value;
	let number = e.target.elements.number.value;
	let dailyPushable = {
		id: id,
		day: days,
		time: e.target.elements.time.value,
		number: e.target.elements.number.value,
		updates: e.target.elements.updates.checked,
		message: '',
		createdAt: timestamp,
		updatedAt: timestamp,
		rating: '',
	};

	//validation
	if (time === '' || 
		time < 0 || 
		time == null || 
		time == undefined) {
		const errorMessageTime = document.createElement('div');
		errorMessageTime.textContent = 'Please enter a time!';
		document.getElementById('blank-time').appendChild(errorMessageTime);
	} else if (
		number === '' ||
		number < 0 ||
		number == null ||
		number == undefined
	) {
		const errorMessageNumber = document.createElement('div');
		errorMessageNumber.textContent = 'Please enter a valid number of times!';
		document.getElementById('blank-number').appendChild(errorMessageNumber);
	} else if (
		days === '' ||
		days === null ||
		days === undefined
	) {
		const errorMessageDay = document.createElement('div');
		errorMessageDay.textContent = 'Please enter a valid Date!';
		document.getElementById('blank-day').appendChild(errorMessageDay);

	} else {
		//calculate logic for message return based on above object
		logicCalc(dailyPushable);

		//push the object into the daily array
		daily.push(dailyPushable);

		//save then render from the "daily" stored array
		saveDaily(daily);
		location.assign(`edit.html#${id}`);

		//generate the DOM output upon form submission with getting the local storage "daily" array
		//generateDailyDOM(daily);
	}
});

window.addEventListener('storage', (e) => {
	if (e.key === 'daily') {
		daily = JSON.parse(e.newValue);
		renderDaily(daily);
	}
});
