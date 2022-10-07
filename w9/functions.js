//gets data from saved storage
const getSavedDaily = function () {
	const dailyJSON = localStorage.getItem('daily');
	if (dailyJSON !== null) {
		return JSON.parse(dailyJSON);
	} else {
		return [];
	}
};
//saves to local storage
const saveDaily = function (daily) {
	localStorage.setItem('daily', JSON.stringify(daily));
};
//logic calculations
const logicCalc = function (daily) {
	let time = getSavedDaily(daily.time);
	let number = getSavedDaily(daily.number);
	let updates = getSavedDaily(daily.updates);
	let message = getSavedDaily(daily.message);
	//sets daily.message
	if (time >= 1200 && time <= 1600 && number < 3 && updates) {
		message =
			'<h1>It is a perfect time and situation to call mom!</h1><h2><p>Call her now!</h2>';
	} else if (time >= 0600 && time <= 0900 && number < 5 && updates) {
		message =
			'<h1>It is not the best time to call mom</h1><p><h2>See if it can wait.</h2>';
	} else {
		message.innerHTML =
			'<h1>Do not call your mom, its not a good situation.</h1><p><h2>Try again another day.</h2>';
	}

	//daily.message = logi;
	//saveDaily(daily);
	//daily.message = message;
	//saveDaily(daily);
	return daily.message;
};
//updates the render
const renderDaily = function (daily, filters) {
	const filteredDaily = daily.filter(function (daily) {
		return !daily.day.includes(filters.hideCompleted);
	});

	document.querySelector('#output').innerHTML = '';

	filteredDaily.forEach(function (dailys) {
		const dailyEl = generateDailyDOM(dailys);
		document.querySelector('#output').appendChild(dailyEl);
	});
};

//toggle the removable value for a given daily item
// const toggleDailyRem = function (id) {
//     const dailyFind = daily.find(function(daily) {
//         return daily.id ===id;
//     })

//     if (dailyFind !== undefined) {
//         dailyFind.removable = !dailyFind.removable
//     }
// };

const removeDaily = function (id) {
	const dailyIndex = daily.findIndex(function (dailys) {
		return dailys.id == id;
	});

	if (dailyIndex > -1) {
		daily.splice(dailyIndex);
	}
};

//Get the DOM elements for an individual return
const generateDailyDOM = function (daily) {
	const dailyDiv = document.createElement('div');
	const dailySpan = document.createElement('span');
	const dailyRem = document.createElement('button');

	//setup checkbox
	// dailyRem.setAttribute('type', 'checkbox');
	// dailyRem.checked = daily.removable;
	// dailyRem.addEventListener('change', function () {
	//     toggleDailyRem(daily.id);
	//     saveDaily(daily);
	//     renderDaily(daily);
	// });

	//setup the remove button
	dailyRem.textContent = 'x';
	dailyDiv.appendChild(dailyRem);
	dailyRem.addEventListener('click', function () {
		removeDaily(daily.id);
		saveDaily(daily);
		renderDaily(daily);
	});

	//appends checkbox to div
	dailyDiv.appendChild(dailyRem);

	//setup the daily text
	dailySpan.innerHTML = daily.message;
	dailyDiv.appendChild(dailySpan);

	return dailyDiv;
};

//Generate Summary DOM
