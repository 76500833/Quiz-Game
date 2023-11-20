// ! Start button:
startButton = document.getElementById("startButton");

// ! Score:
score = document.getElementById("score");

// ! Seconds left (begining with). This is used in the timer.
secondsLeft = 40;

// ! Listen for a click on the start button and then calls the setTime() function.
function startGame() {
    startButton.addEventListener("click", function() {
        setTime(); 
    });
}

// ! Timer that decreases the seconds left by using "setInterval".
function setTime() {
    var timerInterval = setInterval(function() {
    // ! setInterval(function) calls a function or evaluates an expression at specified intervals (in milliseconds).
    // ! Every second that passes, the secondsLeft variable is checked to see if it is equal to 0.    
    if(secondsLeft === 0) {
            clearInterval(timerInterval);
            return
        }
    // ! Every second, the secondsLeft variable is decreased by one 
        secondsLeft--;
    // ! and the textContent of the score element is updated.
        score.textContent = "Time: " + secondsLeft;
    }, 1000);
}

//TODO Make a function that causes the questions and answers to populate.
//TODO Make a function that checks the answers.
//TODO Make a function that ends the game when the timer reaches 0.
//TODO Implement a highscore system.
//TODO Make a function that saves the highscore to local storage.
//TODO Make a function that displays the highscore.

startGame();