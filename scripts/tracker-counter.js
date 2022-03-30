const trackerCount = document.getElementById('counter-digit');

const numButton = document.getElementById('counter-num')
const incButton = document.getElementById('plus-button')
const decButton = document.getElementById('minus-button')
const resButton = document.getElementById('reset-button')

const increment = document.getElementById('inc-num-digit')
const incUp = document.getElementById('inc-up')
const incDown = document.getElementById('inc-down')

const confirm = document.getElementById('reset-confirm');
const cancel = document.getElementById('reset-cancel');
const confirmationPopup = document.getElementById('reset-confirmation');
const overlay = document.getElementById('overlay');

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

incButton.addEventListener('mousedown', () => {
    intervalID = setInterval(function () {
        if (count < 1000000) {
            count = count + incCount;
            trackerCount.innerHTML = count;
        } else {
            trackerCount.innerHTML = "MAX";
        }
    }, 300)
})

incButton.addEventListener('mouseup', () => {
    clearInterval(intervalID);
})

numButton.addEventListener('click', () => {
    if (count < 1000000) {
        count = count + incCount;
        trackerCount.innerHTML = count;
    } else {
        trackerCount.innerHTML = "MAX";
    }
})

numButton.addEventListener('mousedown', () => {
    intervalID = setInterval(function () {
        if (count < 1000000) {
            count = count + incCount;
            trackerCount.innerHTML = count;
        } else {
            trackerCount.innerHTML = "MAX";
        }
    }, 300)
})

numButton.addEventListener('mouseup', () => {
    clearInterval(intervalID);
})


decButton.addEventListener('click', () => {
    if (count > 0) {
        count = count - incCount;
    }
    if (count < 0) {
        count = 0;
    }
    trackerCount.innerHTML = count;
}
)

decButton.addEventListener('mousedown', () => {
    intervalID = setInterval(function () {
        if (count > 0) {
            count = count - incCount;
        }
        if (count < 0) {
            count = 0;
        }
        trackerCount.innerHTML = count;
    }, 300)
})

decButton.addEventListener('mouseup', () => {
    clearInterval(intervalID);
})

// INCREMENT COUNTER
incUp.addEventListener('click', () => {
    if (incCount < 100) {
        incCount++
        increment.innerHTML = incCount
    }
})

incUp.addEventListener('mousedown', () => {
    intervalID = setInterval(function () {
        if (incCount < 100) {
            incCount++;
            increment.innerHTML = incCount
        }
    }, 300)
})

incUp.addEventListener('mouseup', () => {
    clearInterval(intervalID);
}
)

incDown.addEventListener('click', () => {
    if (incCount > 1) {
        incCount--
        increment.innerHTML = incCount
    }
})

incDown.addEventListener('mousedown', () => {
    intervalID = setInterval(function () {
        if (incCount > 1) {
            incCount--;
            increment.innerHTML = incCount;
        }
    }, 300)
})

incDown.addEventListener('mouseup', () => {
    clearInterval(intervalID);
})


resButton.addEventListener('click', () => {
    if (count > 0) {
        confirmationPopup.style.display = 'grid';
        overlay.style.display = 'block';
    }
})

confirm.addEventListener('click', () => {
    confirmationPopup.style.display = 'none';
    overlay.style.display = 'none';
    count = 0;
    trackerCount.innerHTML = count;
})

cancel.addEventListener('click', () => {
    confirmationPopup.style.display = 'none';
    overlay.style.display = 'none';
})

overlay.addEventListener('click', () => {
    confirmationPopup.style.display = 'none';
    overlay.style.display = 'none';
})