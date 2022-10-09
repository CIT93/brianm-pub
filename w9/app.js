const daily = getSavedDaily();



renderDaily(daily);



const summaryTitle = document.createElement('h1');
summaryTitle.textContent = 'Should You Call Your Mom?';
document.querySelector('#header').appendChild(summaryTitle);

document
	.querySelector('#user-input-form')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		let dailyPushable = {
			id: uuidv4(),
			day: e.target.elements.day.value,
			time: e.target.elements.time.value,
			number: e.target.elements.number.value,
			updates: e.target.elements.updates.checked,
			//message: logicCalc(daily),
			message: ''
		}
		logicCalc(dailyPushable);
		daily.push(dailyPushable);
		
		saveDaily(daily);
		renderDaily(daily);
		
		generateDailyDOM(daily);
	});
