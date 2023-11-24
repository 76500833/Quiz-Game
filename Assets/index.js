$('#questions').children().each(function(){
  $(this).css('display', 'none')
})
var score = $('#score')
var button = $('#submit')
var displayNameValue1 = ""
var displayNameValue = $('input[name="name"]')
var startButton = $("#start");
var secondsLeft = 10;
var timer = $("#timer");
var questions = $('#questions')
var timerInterval;
displayNameValue1 = displayNameValue.val();
var displayName = $('input[name="name"]')

function startTimer() {
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
    }, 1000);
}
var userScore = {};
function finalScreen() {
  userScore = (secondsLeft)
  var leaderboard = {
    userOne: {
      name: displayNameValue1,
      userOneScore: userScore,
    } 
  }
  secondsLeft = 0
  $("#timer").text(userScore + " is your score");
  questions.hide()
  displayName.show()
  //? retrieve the value associated with the key "userNames" from the browser's local storage.
  var leaderBoardName = JSON.parse(localStorage.getItem("userNames"))
  score.show()
  $('#leaderboard').append(leaderBoardName);
  $("#inputField").show();
  $("#submit").show();
  $("#submit").on("click", function() {
    displayNameValue1 = displayNameValue.val();
    localStorage.setItem("userNames", JSON.stringify(displayNameValue1));
    var leaderBoardName = JSON.parse(localStorage.getItem("userNames"))
    $('#leaerboard').append(leaderBoardName)
  });
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
      finalScreen()
    } else {
      // !Force game over
      secondsLeft = secondsLeft - 2
    }
})}

  //* store score in local storage
  //TODO append local storage to page

