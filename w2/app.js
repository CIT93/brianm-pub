//showOnPage 
const showOnPage = function(text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML= text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}

//Global Vars
//decision to call my mom or not

//if im busy
let imBusy = false
//if shes busy
let shesBusy = false
//time
let time = 1600
//number of times I've already called this week
let numberOfTimesThisWeek = 3
//if I have any important updates to tell her
let updates = true
//the display message for showOnPage function
let message = 'message'

showOnPage('<h1>List of Global Vars</h1><p>imBusy = '+imBusy+'<p>shesBusy = '+shesBusy+'<p>time = '+time+'<p>numberOfTimesThisWeek = '+numberOfTimesThisWeek+'<p>updates = '+updates+'<p><---------------------------->')

if (imBusy || shesBusy) {
    message = '<h1>Too busy to call today</h1><p>Try again tomorrow'
    showOnPage(message)    
} else if (time >=1200 && time <= 1600 && numberOfTimesThisWeek < 4 && updates) {
    message = '<h1>It is a perfect time and situation to call mom!</h1><p>Call her now!'
    showOnPage(message)
} else {
    message = '<h1>It is not a good time or situation to call mom</h1><p>Try again tomorrow'
    showOnPage(message)
}