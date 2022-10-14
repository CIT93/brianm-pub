const titleElement = document.querySelector('#title');
const bodyElement = document.querySelector('#body');
const rateElement = document.querySelector('#rate');
const updateElement = document.querySelector('#update');
const removeElement = document.querySelector('#remove');


const dailyId = location.hash.substring(1);
let daily = getSavedDaily();
let dailys = daily.find(function (dailys) {
	return dailys.id === dailyId;
});

if (dailys === undefined) {
	location.assign('index.html');
}
let ratingIndex = function (dailys) {
	let i = daily.findIndex(function (dailys) {
		return dailys.id === dailyId;
	})
	return i
}
		
let rating = document.querySelector('#rate-form').addEventListener('submit', function (e) {
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
			rating: rating
	};
	daily.splice(ratingIndex(dailys), 1, ratePush);
	
	saveDaily(daily);
	location.assign('index.html');
}) 
titleElement.innerHTML = dailys.id;
bodyElement.innerHTML = `<li>Day: ${dailys.day.toUpperCase()}<li>Number of times already called this week: ${dailys.number}<li>Time: ${dailys.time}<li>Were there updates: ${dailys.updates}`;
updateElement.textContent = `Last Updated: ${moment(daily.updatedAt).fromNow()}`;

//setup button to remove index from edit page
removeElement.addEventListener('click', function (e) {
	removeDaily(dailys.id);
	saveDaily(daily);
	
	location.assign('index.html');
});

window.addEventListener('storage', function (e) {
 	if (e.key === 'daily') {
 		daily = JSON.parse(e.newValue);
 		dailys = daily.find(function (dailys) {
 			return dailys.id === dailyId;
 		});

 		if (dailys === undefined) {
 			location.assign('index.html');
 		}

 		titleElement.value = daily.id;
 		bodyElement.textContent = `<li>${daily.day}<li>${daily.number}<li>${daily.time}<li>${daily.updates}`;
 		updateElement.textContent = generateLastEdited(dailys.updatedAt);
 	}
 });

const generateUpdateDOM = function (updateElement) {
	const updateEl = document.createElement('span');

	updateElement.appendChild(updateEl);
	updateEl.textContent = daily.updatedAt;

	return updateEl;
};
