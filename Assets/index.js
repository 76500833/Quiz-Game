//* Start button that starts the game and timer
function startGame() {
    startButton = document.getElementById("startButton");
    score = document.getElementById("score");
    secondsLeft = 20;
    startButton.addEventListener("click", function() {
        setTime(); //* Timer that decreases the seconds left by using "setInterval"
    });
}

//* Timer that decreases the seconds left by using "setInterval"
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        score.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startGame();