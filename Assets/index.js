//* Start button that starts the game and timer
startButton = document.getElementById("startButton");
score = document.getElementById("score");
secondsLeft = 20;
function startGame() {
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