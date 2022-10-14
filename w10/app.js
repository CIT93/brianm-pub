let daily = getSavedDaily();

renderDaily(daily);

const summaryTitle = document.createElement('h1');
summaryTitle.textContent = 'Should You Call Your Mom?';
document.querySelector('#header').appendChild(summaryTitle);

document
	.querySelector('#user-input-form')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		const id = uuidv4();
		const timestamp = moment().valueOf();

		let time = e.target.elements.time.value;
		let number = e.target.elements.number.value;
		let dailyPushable = {
			id: id,
			day: e.target.elements.day.value,
			time: e.target.elements.time.value,
			number: e.target.elements.number.value,
			updates: e.target.elements.updates.checked,
			message: '',
			createdAt: timestamp,
			updatedAt: timestamp,
			rating: '',
		};

		//validation
		if (time === '') {
			const errorMessageTime = document.createElement('div');
			errorMessageTime.textContent = 'Please enter a time!';
			document.getElementById('blank-time').appendChild(errorMessageTime);
		} else if (number === '' || number < 0) {
			const errorMessageNumber = document.createElement('div');
			errorMessageNumber.textContent = 'Please enter a valid number of times!';
			document.getElementById('blank-number').appendChild(errorMessageNumber);
		} else {
			//calculate logic for message return based on above object
			logicCalc(dailyPushable);

			//push the object into the daily array
			daily.push(dailyPushable);

			//save then render from the "daily" stored array
			saveDaily(daily);
			renderDaily(daily);

			//generate the DOM output upon form submission with getting the local storage "daily" array
			generateDailyDOM(daily);
		}
	});

window.addEventListener('storage', function (e) {
	if (e.key === 'daily') {
		daily = JSON.parse(e.newValue);
		renderDaily(daily);
	}
});
