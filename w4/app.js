//showOnPage 
const showOnPage = function(text) {
    let newParagraph = document.createElement('p')
    newParagraph.innerHTML= text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}

let decision = {
    time: 1400,
    number: 1,
    updates: true,
    message: 'test',
    

    isAppropriate: function (_time, _number, _updates) {
        if (this.time >= 1200 && this.time <= 1600 && this.number < 3 && this.updates) {
        this.message = '<h1>It is a perfect time and situation to call mom!</h1><p>Call her now!'
        return this.message
        } else if (this.time >= 0600 && this.time <= 1159 && this.number < 3 && this.updates) {
            this.message = '<h1>It is not the best time to call, but if its important</h1><p>Try to reach her'
            return this.message
        } else {
            this.message = '<h1>It is not a good time or situation to call mom</h1><p>Try again tomorrow'
            return this.message 
        }
    },

    changeText: function (first, second, third) {
        let result1 = parseFloat(document.getElementById("first").value)
        let result2 = parseFloat(document.getElementById("second").value)
        let result3 = document.getElementById("third").value
        decision.isAppropriate(result1, result2, result3)
        decision.time = result1
        decision.number = result2
        decision.updates = result3
        
        
    },

    clearText: function () {
        document.getElementById("first").value=""
        document.getElementById("second").value=""
        document.getElementById("third").value=""
        
    },

    
    

}
decision.isAppropriate(decision.time, decision.number, decision.updates)
showOnPage(`<h1>List of variables that influence method</h1><p>time (time of day) = ${decision.time}<p>number (number of times I've already called this week) = ${decision.number}<p>updates (if I have major important updates) = ${decision.updates}<p><----------------------------><p>${decision.message}`)
showOnPage(decision.time)