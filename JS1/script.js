
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let counter = 0;

function updateDisplay() {
    counterDisplay.textContent = counter;
}

function increment() {
    counter++;
    updateDisplay();
}

function decrement() {
    if (counter > 0) {
        counter--;
        updateDisplay();
    }
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
