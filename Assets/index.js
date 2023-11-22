var startButton = $('#start')
var secondsLeft = 10;
var timer = $('#timer')
questions = {
  []
}

function setTime(){
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timer.text(secondsLeft)

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      return
    }
  
  //! Do you reccomend writing more functionality
  //! here? The rest of the game in the timer function?
  
  }, 1000);

//TODO Look for any answer element htat has an attribute that is equal to true
}
startButton.on('click', function () { //! STARTS TIMER WHEN CLICKED
  setTime() 
});



  //TODO display question and answers
    //TODO in this function you need to check each click for:
      //TODO if the click is correct, do take to next question
      //TODO if incorrect, subtract time, take to next question
    //TODO if time reaches zero, take to home page
    //TODO store users name from an input box in local storage + their time
    //TODO print both on the home page

