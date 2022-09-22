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

const isAppropriate = function (obj) {
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
};

const processDaily = function (obj) {
	daily.forEach(function () {
		isAppropriate(obj.day);
		isAppropriate(obj.time);
		isAppropriate(obj.number);
		isAppropriate(obj.updates);
		isAppropriate(obj.message);
	});
};

const loopOverDaily = function () {
	daily.forEach(function (obj) {
		processDaily(obj);
	});
};
let data = {
	day: 'Tuesday',
	time: 1400,
	number: 2,
	updates: true,
	message: 'testing',
};

const pDay = document.createElement('p');
const pTime = document.createElement('p');
const pNumber = document.createElement('p');
const pUpdates = document.createElement('p');
let dDay = 'monday';
let dTime = 1600;
let dNumber = 5;
let dUpdates = true;
let dMessage = 'tester';



/////////////////////////////////////////////////////////////////////////
////////////////     need help here     /////////////////////////////////
function submit(event) {
	dDay.textContent = `${event.day}`;
	dTime.textContent = `${event.time}`;
	dNumber = `${event.number}`;
	dUpdates = `${event.updates}`;
	event.preventDefault();
}
const form = document.getElementById('form');
form.addEventListener('submit', submit);
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


loopOverDaily(isAppropriate(data));

pDay.textContent = `

Day --> The day of the week. --><h3> ${data.day}</h3>

`;

pTime.textContent = `
Time (time of day in military time, ex. 0000-1159) --> ${data.time}

`;
pNumber.textContent = `
Number --> Number of times I've already called this week. --> ${data.number}

`;
pUpdates.textContent = `
Updates --> Do I have any important updates to tell her? --> ${data.updates}
`;

//when clicking #submit-button, drop in "the button was clicked" on button text and then append data from above to the body
document
	.querySelector('#submit-button')
	.addEventListener('click', function (e) {
		e.target.textContent = 'The form was submitted successfully!';

		document.querySelector('body').appendChild(summaryTitle);
		document.querySelector('body').appendChild(pDay);
		document.querySelector('body').appendChild(pTime);
		document.querySelector('body').appendChild(pNumber);
		document.querySelector('body').appendChild(pUpdates);
	});

//create the title for summary
const summaryTitle = document.createElement('h1');
summaryTitle.textContent = `List of variables that influence method:`;
document.querySelector('body').appendChild(summaryTitle);
