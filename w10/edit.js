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
let ratingIndex = function (dailyId) {
	return daily['length']
}
let rating = document.querySelector('#rate-form').addEventListener('submit', function (e) {
	e.preventDefault();
	const ratePush = {
		rating: e.target.elements.rate.value
	};
	daily.splice(daily[ratingIndex(dailyId)], 1, ratePush);
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

