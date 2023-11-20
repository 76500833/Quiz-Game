timer = document.getElementById("timer");
button = document.getElementById("button");





//* add multiple questions and answer objects:

    




// * counter is skipping one
    function countdown() {
        
        var timeLeft = 5;
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
            clearInterval(timeInterval)
            }
            }, 1000);
    }

button.addEventListener("click", function (event) {
   event.preventDefault();
    countdown();
    var questions = [
        {
        question: "What is HTML?",
        answers: ["Paris", "hyper text markup languge", "Berlin", "Madrid"],
        correctAnswer: "Paris"
        },
        {
        question: "What is CSS?",
        answers: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Jupiter"
        },
    ]
    localStorage.setItem("questions", JSON.stringify(questions));
    JSON.parse(localStorage.getItem("questions"));

    for(i = 0; i < questions.length; i++) {
    
        //* Populates questions
        displayThisQuestion = questions[i].question;
        changeThisQuestion = document.getElementById("question")
        changeThisQuestion.textContent = displayThisQuestion;

        //* Populates answers
        var answerOptions = document.getElementsByClassName("answers");

        for (var i = 0; i < answerOptions.length; i++) {
            answerOptions[i].textContent = questions[0].answers[i];
}
        }


    
   
});
// var displayTheseAnswers = questions[i].answers;
// var answerOptions = document.getElementsByClassName("answer");

// for (var j = 0; j < displayTheseAnswers.length; j++) {
//     answerOptions[j].textContent = displayTheseAnswers[j];
// }

// // Break the loop after displaying the first question and its answers
// break;
// }
