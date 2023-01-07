
var timerEl = document.getElementById('timer');
var startButton = document.getElementById("startbutton");
var quizStart = document.getElementById("quizstart");
var quizQuestion = document.getElementById("quizquestion");
var quizEnd =document.getElementById("quizend");
var quizEndHead =document.getElementById("quizendhead");
var question = document.getElementById('question');
var lastAnswer = document.getElementById("lastanswer")
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
let i = 0;
let submitAnswer = '';
buttons = document.getElementsByClassName("answerbutton");


function countdown() {
    
    timeLeft = 600;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
  
        if (timeLeft === -1 ) {
            clearInterval(timeInterval);
            timerEl.textContent = '';
            quizQuestion.style.display = "none";
            quizEnd.style.visibility = "visible";
            quizEndHead.textContent = "Out of time";
        } else if (i === quizData.length) {
            clearInterval(timeInterval);
            timerEl.textContent = '';
            quizQuestion.style.display = "none";
            quizEnd.style.visibility = "visible";
            quizEndHead.textContent = "End of quiz, Your Score is " + timeLeft;
            console.log(timeLeft);
        } 

    }, 1000);
}

startButton.addEventListener("click", function () {
    countdown ();
    quizStart.style.display = "none";
    quizQuestion.style.visibility = "visible";
    startQuestion();
    answer();

});

function startQuestion () {

        submitAnswer = "";
        console.log(submitAnswer);
        question.textContent = quizData[i].question;
        a.textContent = quizData[i].a;
        b.textContent = quizData[i].b;
        c.textContent = quizData[i].c;
        
};

function answer () {
    
    for (let k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", function() {
            submitAnswer = buttons[k].getAttribute("id");    
            console.log(submitAnswer);
            console.log(quizData[i].correct);
                if (submitAnswer == quizData[i].correct) {
                    console.log("correct"); 
                    i++;
                    lastAnswer.textContent = "Last Answer was Corrrect"
                    nextquestion();                 
                } else {
                    console.log("wrong");
                    i++;
                    timeLeft = timeLeft-50;
                    lastAnswer.textContent = "Last Answer was Wrong"
                    nextquestion();
                } 
            }
                 
        );        
    };
    
    
};

function nextquestion () {
    if (i < quizData.length) {
        startQuestion();        
    } else {
        quizQuestion.style.display = "none";
        quizEnd.style.visibility = "visible";
    }
    
}



  