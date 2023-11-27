$(document).ready(function() {
  $('.leaderboard').hide()
  // Load the leaderboard data from the local storage
  var leaderboardData = JSON.parse(localStorage.getItem("leaderboardData")) || [];

  // Populate the leaderboard
  $('.leaderboard').each(function(i) {
    if (leaderboardData[i]) {
      $(this).text(leaderboardData[i]);
    }
  });
  $('#questions').children().each(function(){
    $(this).css('display', 'none')
  })

  var score = $('#score')
  var button = $('#submit')
  var displayNameValue1 = ""
  var displayNameValue = $('input[name="name"]')
  var startButton = $("#start");
  var secondsLeft = 70;
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
          timer.text("Game Over. Refresh to try again.");
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
    $("#timer").html(userScore + " is your score.<br>Save your score, <br>then press refresh to try again").css("text-align", "center");
    questions.hide()
    displayName.show()
    //? retrieve the value associated with the key "userNames" from the browser's local storage.
    var leaderBoardName = JSON.parse(localStorage.getItem("userNames"))
    score.show()
    // $('.leaderboard').append(leaderBoardName);
    $("#inputField").show();
    $("#submit").show();
    $(".leaderboard").show()

    $("#submit").on("click", function() {
      displayNameValue1 = displayNameValue.val();
      // userOneScore = score
      localStorage.setItem("userNames", JSON.stringify(displayNameValue1));
      localStorage.setItem("Score", JSON.stringify(userScore));
      var leaderBoardName = JSON.parse(localStorage.getItem("userNames"))
      var leaderBoardScore = JSON.parse(localStorage.getItem("Score"))
        var emptyLi = $('.leaderboard').filter(function() {
      return !this.innerHTML;

    }).first();

    // Append the username and score to the li element
    emptyLi.append(leaderBoardName + ': ' + leaderBoardScore);
      // $('#leaerboard').append(leaderBoardName)
      // $('$leaderboard').append

      var leaderboardData = $('.leaderboard').map(function() {
        return $(this).text();
      }).get();
      localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
      
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
    startButton.hide()
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
    var answerTwo = $("#a2").addClass('wrong').text('3b')
    var answerThree = $("#a3").addClass('wrong').text('3c')
    var answerFour = $("#a4").addClass('wrong').text('3d')
    var button = $('button')
    button.on('click', function(event){
      if($(this).hasClass("correct")){
        displayQuestionFour()
      } else {
        secondsLeft = secondsLeft - 2
      }
  })}
  function displayQuestionFour () {
    var question = $("#question-text").text("What is CSS")
    var answerOne = $("#a1").addClass('correct').text('CORRECT')
    var answerTwo = $("#a2").addClass('wrong').text('4b')
    var answerThree = $("#a3").addClass('wrong').text('4c')
    var answerFour = $("#a4").addClass('wrong').text('4d')
    var button = $('button')
    button.on('click', function(event){
      if($(this).hasClass("correct")){
        displayQuestionFive()
      } else {
        secondsLeft = secondsLeft - 2
      }
  })}
  function displayQuestionFive () {
    var question = $("#question-text").text("What is vscode-pets")
    var answerOne = $("#a1").addClass('correct').text('CORRECT')
    var answerTwo = $("#a2").addClass('wrong').text('5b')
    var answerThree = $("#a3").addClass('wrong').text('5C')
    var answerFour = $("#a4").addClass('wrong').text('5D')
    var button = $('button')
    button.on('click', function(event){
      if($(this).hasClass("correct")){
        displayQuestionSix()
      } else {
        secondsLeft = secondsLeft - 2
      }
  })}
  function displayQuestionSix () {
    var question = $("#question-text").text("What is Anguler")
    var answerOne = $("#a1").addClass('correct').text('6A')
    var answerTwo = $("#a2").addClass('wrong').text('6B')
    var answerThree = $("#a3").addClass('wrong').text('6C')
    var answerFour = $("#a4").addClass('wrong').text('6D')
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

})