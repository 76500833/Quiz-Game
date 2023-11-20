// * Start button:
startButton = document.getElementById("startButton");

// * Score:
score = document.getElementById("score");

//* Questions:
questions = document.getElementById("questions");

//* Answers:
choices = document.getElementById("choice");

// ! Seconds left (begining with). This is used in the timer.
secondsLeft = 40;

// ! Listen for a click on the start button and then calls the setTime() function.
function startGame() {
  startButton.addEventListener("click", function () {
    setTime();
    
  });
}

// ! Timer that decreases the seconds left by using "setInterval".
function setTime() {
  var timerInterval = setInterval(function () {
    // ! setInterval(function) calls a function or evaluates an expression at specified intervals (in milliseconds).
    // ! Every second that passes, the secondsLeft variable is checked to see if it is equal to 0.
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      return;
    }
    // ! Every second, the secondsLeft variable is decreased by one
    secondsLeft--;
    // ! and the textContent of the score element is updated.
    score.textContent = "Time: " + secondsLeft;
  }, 1000);
}

var questionsAndAnswers = [
    {
        question: "What is an object?",
        choices: ["A collection of keys and values", "a burger", "a minecraft", "a dog"],
        answer: "A collection of keys and values"
    },
    {
        question: "How do you center a div",
        choices: ["justify-content: center;", "justify-content: smol but centered;", "align-items: mom's spaghetti", "text-align: center;"],
        answer: "justify-content:center;"
    },
    {
        question: "How do you store something in local storage?",
        choices: ["localStorage.", "Berlin", "Paris", "Madrid"],
        answer: "localStorage.setItem('key', 'value')"
    }
];

//TODO Make a function that causes the questions and answers to populate.

//* Generate 4 buttons Credit to co pilot for 61 - 80
// Assuming you have a question element with this ID
var questionElement = document.getElementById('question');

// Assuming you have 4 buttons with these IDs in your HTML
var buttons = [
    document.getElementById('button1'),
    document.getElementById('button2'),
    document.getElementById('button3'),
    document.getElementById('button4')
];

var currentQuestionIndex = 0;

function updateQuestionAndChoices() {
    var currentQuestion = questionsAndAnswers[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        buttons[i].textContent = currentQuestion.choices[i];
    }
}
// Assuming you have a "Next" button with this ID in your HTML

// Call initially to set the first question and choices
updateQuestionAndChoices();

// // Add an event listener for the click event
// button.addEventListener('click', function() {
//     console.log('Button was clicked');
// });

// Add the button to the body of the document

//TODO Make a function that checks the answers.
//TODO Make a function that ends the game when the timer reaches 0.
//TODO Implement a highscore system.
//TODO Make a function that saves the highscore to local storage.
//TODO Make a function that displays the highscore.

startGame();
buttonsAndQuestion();
