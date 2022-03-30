const trackerCount = document.getElementById('counter-digit');

const numButton = document.getElementById('counter-num')
const incButton = document.getElementById('plus-button')
const decButton = document.getElementById('minus-button')
const resButton = document.getElementById('reset-button')

const increment = document.getElementById('inc-num-digit')
const incUp = document.getElementById('inc-up')
const incDown = document.getElementById('inc-down')
let count = 0;
let incCount = 1;


// TRACKER COUNTER
incButton.addEventListener('click', () => {
    if (count < 1000000) {
        count = count + incCount;
        trackerCount.innerHTML = count;
    } else {
        trackerCount.innerHTML = "MAX";
    }
})

numButton.addEventListener('click', () => {
    if (count < 1000000) {
        count = count + incCount;
        trackerCount.innerHTML = count;
    } else {
        trackerCount.innerHTML = "MAX";
    }
})

decButton.addEventListener('click', () => {
    if (count > 0) {
        count = count - incCount;
        trackerCount.innerHTML = count;
    }
})

resButton.addEventListener('click', () => {
    count = 0;
    trackerCount.innerHTML = count;
})



// INCREMENT COUNTER
incUp.addEventListener('click', () => {
    if (incCount < 100) {
        incCount++
        increment.innerHTML = incCount
    }
})

incDown.addEventListener('click', () => {
    if (incCount > 1) {
        incCount--
        increment.innerHTML = incCount
    }
})
