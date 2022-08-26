//showOnPage 
const showOnPage = function(text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML= text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}

//Global Vars
//decision to call my mom or not
let _time = 1400
let _numberOfTimesThisWeek = 1
let _updates = true
let message
let result

let multi = function (_time, _numberOfTimesThisWeek, _updates, message) {
    if (_time >=1200 && _time <= 1600 && _numberOfTimesThisWeek < 3 && _updates) {
    result = true
        return result
    } else {
        result = false
        return result
    }
}

let decideToCallMom = function (time, _numberOfTimesThisWeek, _updates, message) {

     
    
       
        if (multi) {
            message = '<h1>It is a perfect time and situation to call mom!</h1><p>Call her now!'
            return message
        } else {
            message = '<h1>It is not a good time or situation to call mom</h1><p>Try again tomorrow'
            return message
        }
    

}

//im too busy
let condition0 = decideToCallMom(1000, 4, false, message)
//shes too busy
let condition1 = decideToCallMom(1000, 4, false, message)
//just the right time
let condition2 = decideToCallMom(1400, 4, false, message)
//just havent called a lot this week
let condition3 = decideToCallMom(1000, 1, false, message)
//only have updates
let condition4 = decideToCallMom(1000, 4, true, message)
//everything perfect to call
let condition5 = decideToCallMom(1400, 1, true, message)
//too late, everything else good
let condition6 = decideToCallMom(1800, 1, true, message)

showOnPage('<h1>List of Global Vars</h1><p>time = '+_time+'<p>numberOfTimesThisWeek = '+_numberOfTimesThisWeek+'<p>updates = '+_updates+'<p><---------------------------->')

showOnPage(condition6)

