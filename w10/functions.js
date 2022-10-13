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
const logicCalc = function (dailyPushable) {
	//sets daily.message
	if (dailyPushable.time >= 1200 && dailyPushable.time <= 1600 && dailyPushable.number < 3 && dailyPushable.number >= 0) {
        return dailyPushable.message =
			'<h1>It is a perfect time and situation to call mom!</h1><h2><p>Call her now!</h2>';
	} else if (dailyPushable.time >= 1200 && dailyPushable.time <= 1600 && dailyPushable.number < 4 && dailyPushable.number >= 0) {
        return dailyPushable.message =
			'<h1>It is not the best time to call mom</h1><p><h2>See if it can wait.</h2>';
	} else if (dailyPushable.updates) {
        return dailyPushable.message =
			'<h1>Since you have important updates.</h1><h2>Keep it quick!</h2>';
	} else {
        return dailyPushable.message =
        '<h1>Do not call your mom, its not a good situation.</h1><h2>Try again another day.</h2>';
    }
};

//handles finding index of the element to be removed then saves and rerenders local storage
const removeDaily = function (id) {
	const dailyIndex = daily.findIndex(function (daily) {
		return daily.id == id;
	});

	if (dailyIndex > -1) {
		daily.splice(dailyIndex, 1);
        saveDaily(daily); 
		renderDaily(daily);
		 
         
	};
};

//Get the DOM elements for an individual return
const generateDailyDOM = function (daily) {
	const dailyDiv = document.createElement('div');
	const dailySpan = document.createElement('span');
	const dailyRem = document.createElement('button');
	const dailyRate = document.createElement('a');
    
	//setup the remove button
	dailyRem.textContent = 'x';
	dailyRem.addEventListener('click', function () {
		removeDaily(daily.id);
	});

	//setup rate linking
	dailyRate.setAttribute('href', `edit.html#${daily.id}`);
	dailyRate.innerHTML = `Rate your call for this time`;
	
	//setup the daily text
	dailySpan.innerHTML = daily.message;
	dailyDiv.appendChild(dailySpan);

    //appends remove button to span containing daily message
    dailySpan.appendChild(dailyRem);

	
	dailyDiv.appendChild(dailyRate);

	return dailyDiv;
};

//updates the render
const renderDaily = function (daily) {
	 const filteredDaily = daily.filter(function (daily) {
	 	if (daily.length >= 0) {
            return console.error();
        } else {
            return daily.id.length > 6;
        }
        
	 });
     
	document.querySelector('#output').innerHTML = '';

	filteredDaily.forEach(function (daily) {
		const dailyEl = generateDailyDOM(daily);
		document.querySelector('#output').appendChild(dailyEl);
	});
};

//Generate Last edited message
const generateLastEdited = function (timestamp) {
	return `Last Edited: ${moment(timestamp).fromNow()}`;
}