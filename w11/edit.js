const titleElement = document.querySelector('#title');
const bodyElement = document.querySelector('#body');
const rateElement = document.querySelector('#rate');
const updateElement = document.querySelector('#update');
const removeElement = document.querySelector('#remove');
const dailyId = location.hash.substring(1);
let daily = getSavedDaily();
let dailys = daily.find((dailys) => dailys.id === dailyId);

//if dailys id not found, kickback to index, otherwise print daily found to console
!dailys ? location.assign('index.html') : console.log('daily found')

//finding index for rating system
let ratingIndex = (dailys) => {
	let i = daily.findIndex((dailys) => dailys.id === dailyId);
	return i;
};

//rating logic
let rating = document
	.querySelector('#rate-form')
	.addEventListener('submit', (e) => {
		e.preventDefault();
		const timestamp = moment().valueOf();
		let rating = e.target.elements.rate.value;
		const ratePush = {
			id: daily[ratingIndex(dailys)].id,
			day: daily[ratingIndex(dailys)].day,
			time: daily[ratingIndex(dailys)].time,
			number: daily[ratingIndex(dailys)].number,
			updates: daily[ratingIndex(dailys)].updates,
			message: daily[ratingIndex(dailys)].message,
			createdAt: timestamp,
			updatedAt: timestamp,
			rating: rating,
		};
		daily.splice(ratingIndex(dailys), 1, ratePush);

		saveDaily(daily);
		location.assign('index.html');
	});

//set pages title up
titleElement.innerHTML = `Daily ID: <br />${daily[ratingIndex(dailys)].id}`;

//set the body element to return the same message as on main index page and provide variables that influenced this decision
bodyElement.innerHTML = `${logicCalc(dailys)}<li>Day: ${moment(dailys.day).format('dddd')}<li>Number of times already called this week: ${
	dailys.number
}<li>Time: ${dailys.time}<li>Were there updates: ${dailys.updates}`;

//use moment to update 'last updated' on page
updateElement.textContent = `Last Updated: ${moment(
	daily.updatedAt
).fromNow()}`;

//setup button to remove index from edit page
removeElement.addEventListener('click', () => {
	removeDaily(dailys.id);
	saveDaily(daily);
	location.assign('index.html');
});

window.addEventListener('storage', (e) => {
	if (e.key === 'daily') {
		daily = JSON.parse(e.newValue);
		dailys = daily.find((dailys) => dailys.id === dailyId);

		!dailys ? location.assign('index.html') : console.log('daily found _ storage note');
	}
});

const generateUpdateDOM = (updateElement) => {
	const updateEl = document.createElement('span');
	updateElement.appendChild(updateEl);
	updateEl.textContent = daily.updatedAt;
	return updateEl;
};
