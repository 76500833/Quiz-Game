timer = document.getElementById("timer");
button = document.getElementById("button");


    function countdown() {
        
        var timeLeft = 100;
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
                // Set the `textContent` of `timerEl` to show the remaining seconds
            timer.textContent = timeLeft + ' seconds remaining';
                // Decrement `timeLeft` by 1
                timeLeft--;
        } else if (timeLeft === 1) {
                // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timeLeft.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
                // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timer.textContent = '';
                // Use `clearInterval()` to stop the timer
            (timeInterval)
            }
            }, 1000);
    }

button.addEventListener("click", function (event) {
    countdown();
})
