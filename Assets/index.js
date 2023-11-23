$('#questions').children().each(function(){
  $(this).css('display', 'none')
})
var score = $('#score')
var button = $('#submit')

var name = $('input[name="name"]').val()

var displayName = $('input[name="name"]')

var startButton = $("#start");

var secondsLeft = 5;

var timer = $("#timer");

var questions = $('#questions')
var timerInterval;
function startTimer() {
  // $('#questions').children().each(function(){
  questions.children().each(function(){
  $(this).css('display', 'flex')
  displayName.css('display', 'none')
  })
  var timerInterval = setInterval(function () {

    if (secondsLeft > 0) {
      secondsLeft--;
      timer.text(secondsLeft);
      if (secondsLeft === 0) { //! force game over screen
        clearInterval(timerInterval);
        questions.css('display', 'none')
        timer.text("Game Over");
      }
      }
      function finalScreen() {
        //* capture the score
        var capturedTime = secondsLeft
        clearInterval()
        $("#timer").text("");
        console.log(capturedTime);
      
        //* set questions display to none
      
        //* show input field
      
        //* store score in local storage, with the key being the value of the input
      
      }

      
    }, 1000);

}

questionsAndAnswers = {
  questionOne: "This is question one",
  answerOne: "This is answer one",

  questionTwo: "This is quetsion two",
  answerTwo: "This is answer Two",

  questionThree: "This is question one",
  answerThree: "This is answer one",

  questionFour: "This is quetsion two",
  answerFour: "This is answer Two",
};
const { questionOne, answerOne, questionTwo, answerTwo,
questionThree, answerThree, questionFour, answerFour } = questionsAndAnswers;

startButton.on("click", function () {
  //* Timer
  startTimer();
  //* Displays questions/answers. Checks if user was correct/panalizes -2 seconds. 
  displayQuestionOne()

});

function displayQuestionOne () {

    var question = $("#question-text").text("What is HTML")
    var answerOne = $("#a1").addClass('correct').text('CORRECT')
    var answerTwo = $("#a2").addClass('wrong').text('hypertext monkey language')
    var answerThree = $("#a3").addClass('wrong').text('hyper caffienated monkey dance')
    var answerFour = $("#a4").addClass('wrong').text('hypertext money laundering')
      var button = $('button')
      button.on('click', function(event){
        //? (display next question)
        if($(this).hasClass("correct")){
          displayQuestionTwo()
        } else {
          secondsLeft = secondsLeft - 2
        }
      })}
function displayQuestionTwo () {
  var question = $("#question-text").text("What is CSS")
  var answerOne = $("#a1").addClass('correct').text('CORRECT')
  var answerTwo = $("#a2").addClass('wrong').text('B')
  var answerThree = $("#a3").addClass('wrong').text('C')
  var answerFour = $("#a4").addClass('wrong').text('D')
  var button = $('button')
  button.on('click', function(event){
  if($(this).hasClass("correct")){
    displayQuestionThree()
  } else {
    secondsLeft = secondsLeft - 2
  }
  })}
function displayQuestionThree(){
  var question = $("#question-text").text("What is 3")
  var answerOne = $("#a1").addClass('correct').text('CORRECT')
  var answerTwo = $("#a2").addClass('wrong').text('3B')
  var answerThree = $("#a3").addClass('wrong').text('3C')
  var answerFour = $("#a4").addClass('wrong').text('3D')
  var button = $('button')
  button.on('click', function(event){
    if($(this).hasClass("correct")){
      displayQuestionFour()
    } else {
      secondsLeft = secondsLeft - 2
    }
})}
function displayQuestionFour () {
  var question = $("#question-text").text("What is 4CSS")
  var answerOne = $("#a1").addClass('correct').text('CORRECT')
  var answerTwo = $("#a2").addClass('wrong').text('4B')
  var answerThree = $("#a3").addClass('wrong').text('4C')
  var answerFour = $("#a4").addClass('wrong').text('4D')
  var button = $('button')
  button.on('click', function(event){
    if($(this).hasClass("correct")){
      displayQuestionFive()
    } else {
      secondsLeft = secondsLeft - 2
    }
})}
function displayQuestionFive () {
  var question = $("#question-text").text("What is 5CSS")
  var answerOne = $("#a1").addClass('correct').text('CORRECT')
  var answerTwo = $("#a2").addClass('wrong').text('45B')
  var answerThree = $("#a3").addClass('wrong').text('45C')
  var answerFour = $("#a4").addClass('wrong').text('45D')
  var button = $('button')
  button.on('click', function(event){
    if($(this).hasClass("correct")){
      displayQuestionSix()
    } else {
      secondsLeft = secondsLeft - 2
    }
})}


function displayQuestionSix () {
  var question = $("#question-text").text("What is 46CSS")
  var answerOne = $("#a1").addClass('correct').text('46A')
  var answerTwo = $("#a2").addClass('wrong').text('46B')
  var answerThree = $("#a3").addClass('wrong').text('46C')
  var answerFour = $("#a4").addClass('wrong').text('46D')
  var button = $('button')
  button.on('click', function(event){
    if($(this).hasClass("correct")){
      
// !since the only thing you can touch is seconds left you have to set it to zero
// !so you can force the closing of the timer
    } else {
      // !Force game over
      secondsLeft = secondsLeft - 2
    }
})}

//! fix negative!
//* To be ran upon last correct answer.
// function endGame() {
//   //* capture the score
//   var capturedTime = secondsLeft

//   $("#timer").text("");
//   console.log(capturedTime);

  //* set questions display to none

  //* show input field

  //* store score in local storage, with the key being the value of the input



      



//? Create a function that displays the user input and submit buttons upon completion.
//? Thenrun it in q 6

