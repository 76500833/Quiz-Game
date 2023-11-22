var startButton = $('#start')
var secondsLeft = 10;
var timer = $('#timer')
function setTime(){
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timer.text(secondsLeft)

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      return()
    }
  }, 1000);
}
startButton.on('click', function () {
  setTime()
  //TODO display question and answers
    //TODO in this function you need to save each click
    //TODO if the click is correct, do nothing
    //TODO if incorrect, subtract time
    //TODO if time reaches zero, take to home page
    //TODO if time is not zero, store time in localStorage
    //TODO store users name from an input box in local storage
    //TODO print both on the home page
});
