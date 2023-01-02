
var timerEl = document.getElementById('timer');
var startButton = document.getElementById("startbutton");
var quizStart = document.getElementById("quizstart");
var quizQuestion = document.getElementById("quizquestion");
var quizEnd =document.getElementById("quizend")

quizStart.style.visibility = "visible";

function countdown() {
    
    var timeLeft = 10;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
  
      if(timeLeft === -1 ) {
        clearInterval(timeInterval);
        timerEl.textContent = 'times up';
        quizQuestion.style.display = "none";
        quizEnd.style.visibility = "visible";
      }
  
    }, 1000);
}

startButton.addEventListener("click", function () {
    countdown ();
    quizStart.style.display = "none";
    quizQuestion.style.visibility = "visible";

});
console.log(startButton);

  