let delay = 3000;
let remainingTime = delay / 1000;

let interval = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    if (remainingTime === 0) {
        clearInterval(interval);
        generateRandomNumber();
    }
}, 1000);

// Generate random number after the delay
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random number: ${randomNumber}`);
}