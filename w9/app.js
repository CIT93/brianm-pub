const daily = getSavedDaily();

 const filters = {
 	searchText: '',
	 hideCompleted: false,
 };
renderDaily(daily, filters);

const summaryTitle = document.createElement('h1');
summaryTitle.textContent = 'Should You Call Your Mom?';
document.querySelector('#header').appendChild(summaryTitle);

document
	.querySelector('#user-input-form')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		
		daily.push({
			id: uuidv4(),
			day: e.target.elements.day.value,
			time: e.target.elements.time.value,
			number: e.target.elements.number.value,
			updates: e.target.elements.updates.checked,
			removable: false,
			message: logicCalc(daily),
		});
		//logic(e);
		//logicCalc(daily);

		saveDaily(daily);
		renderDaily(daily, filters);
		
		generateDailyDOM(daily);
	});
