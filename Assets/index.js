
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
    //*displays first qestion and answers
    var question = $("#question-text").text("What is HTML")
    var answerOne = $("#a1").addClass('correct').text('hypertext markup language')
    var answerTwo = $("#a2").addClass('wrong').text('hypertext monkey language')
    var answerThree = $("#a3").addClass('wrong').text('hyper caffienated monkey dance')
    var answerFour = $("#a4").addClass('wrong').text('hypertext money laundering')
    //*checks if click was correct
    //? Check if user click was correct
    var button = $('button')
    button.on('click', function(event){

    //? If correct
      if($(this).hasClass("correct")){
        //? (display next question)
        //TODO if the click is correct, take to next question
        var question = $("#question-text").text("What is CSS")
        var answerOne = $("#a1").addClass('correct').text('A')
        var answerTwo = $("#a2").addClass('wrong').text('B')
        var answerThree = $("#a3").addClass('wrong').text('C')
        var answerFour = $("#a4").addClass('wrong').text('D')

          // var question = $("#question-text").text("WhAAAAACSS")
          // var answerOne = $("#a1").addClass('correct').text('ADDD')
          // var answerTwo = $("#a2").addClass('wrong').text('BAA')
          // var answerThree = $("#a3").addClass('wrong').text('CDDAW')
          // var answerFour = $("#a4").addClass('wrong').text('DDAW')
      
      } else {
        secondsLeft = secondsLeft - 2
      }
    }
    )
  }
