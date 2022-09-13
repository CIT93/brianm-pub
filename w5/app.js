//showOnPage
const showOnPage = function (text) {
	let newParagraph = document.createElement('p');
	newParagraph.innerHTML = text;
	let outputDiv = document.getElementById('output');
	outputDiv.append(newParagraph);
};
let monday = true;
let tuesday = false;
//const decisionDaily = [1400, 5, true, 'test'];
const daily = [{
		day: monday,
        time: 1400, 
        number: 5, 
        updates: true, 
        message: 'test'
	},{
     
		day: tuesday,
        time: 1400, 
        number: 5, 
        updates: true, 
        message: 'test'
	
}];


	let isAppropriate = function (obj) {
		if (
			obj.time >= 1200 &&
			obj.time <= 1600 &&
			obj.number < 3 &&
			obj.updates
		) {
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
	}
    
 const processDaily =  function(obj) {
 	daily.forEach(element => {
 		isAppropriate(obj.day)
 		isAppropriate(obj.time)
 		isAppropriate(obj.number)
 		isAppropriate(obj.updates)
 		isAppropriate(obj.message)
 	}); 
 }

const loopOverDaily = function (test) {
    daily.forEach(function (obj) {
        processDaily(obj);
    });
	//return daily
};
const test = [{
	time: 1400,
	number: 5,
	updates: true,
	message: 'testing'
}];

loopOverDaily(daily);
showOnPage(test);


//isAppropriate(test);
showOnPage(
	`<h1>List of variables that influence method</h1><p>
	time (time of day) = ${daily.time}<p>
	number (number of times I've already called this week) = ${daily.number}<p>
	updates (if I have major important updates) = ${daily.updates}
	<p><----------------------------><p>
	${daily.message}`
        
    );
//showOnPage();
