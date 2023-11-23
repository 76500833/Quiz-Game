
var startButton = $("#start");
var secondsLeft = 10;
var timer = $("#timer");
var questions = $('#questions')

$('#questions').children().each(function(){
  $(this).css('display', 'none')
})

function startTimer() {
  $('#questions').children().each(function(){
    $(this).css('display', 'block')
  })
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.text(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timer.text("");
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
  displayQuestion()

});

function displayQuestion () {

    var question = $("#question-text").text("What is HTML")
    var answerOne = $("#a1").addClass('correct').text('hypertext markup language')
    var answerTwo = $("#a2").addClass('wrong').text('hypertext monkey language')
    var answerThree = $("#a3").addClass('wrong').text('hyper caffienated monkey dance')
    var answerFour = $("#a4").addClass('wrong').text('hypertext money laundering')

    //? Check if user click was correct
    var button = $('button')
    button.on('click', function(event){
    //? If correct (display next question)
      if($(this).hasClass("correct")){
        //TODO if the click is correct, take to next question
        var question = $("#question-text").text("What is CSS")
        var answerOne = $("#a1").addClass('correct').text('A')
        var answerTwo = $("#a2").addClass('wrong').text('B')
        var answerThree = $("#a3").addClass('wrong').text('C')
        var answerFour = $("#a4").addClass('wrong').text('D')
      }
      else {
        secondsLeft = secondsLeft - 2
      }
})
}


//TODO if time reaches zero, take to home page
//TODO store users name from an input box in local storage + their time
//TODO print both on the home page

