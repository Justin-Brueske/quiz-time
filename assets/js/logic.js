
var timerEl = document.getElementById('timer');
var startButton = document.getElementById("startbutton");
var quizStart = document.getElementById("quizstart");
var quizQuestion = document.getElementById("quizquestion");
var quizEnd =document.getElementById("quizend");
var quizEndHead =document.getElementById("quizendhead");
var question = document.getElementById('question');
var lastAnswer = document.getElementById("lastanswer");
var highscores = document.getElementById("highscores");
var highScoreList = document.getElementById("highscores-list");
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
let i = 0;
let submitAnswer = '';
let initialsInput = document.querySelector('#initials');
buttons = document.getElementsByClassName("answerbutton");
var submitButton = document.querySelector('#submit');
var retakeButton = document.querySelector('#retake');
var clearButton = document.querySelector('#clearscore');
var showhighscoreButton = document.querySelector('#showhighscore');
var hiscore = [];


// Timer function
function countdown() {
    
    timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
  
        if (timeLeft <= -1 ) {
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
        } 
    }, 1000);
}

// start button listener
startButton.addEventListener("click", function () {
    countdown ();
    quizStart.style.display = "none";
    quizQuestion.style.visibility = "visible";
    startQuestion();
    answer();
});

// displays the question
function startQuestion () {
        submitAnswer = "";
        question.textContent = quizData[i].question;
        a.textContent = quizData[i].a;
        b.textContent = quizData[i].b;
        c.textContent = quizData[i].c;
};

// answer function 
function answer () {
    for (let k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", function() {
            submitAnswer = buttons[k].getAttribute("id");    
                if (submitAnswer == quizData[i].correct) {
                    i++;
                    lastAnswer.textContent = "Last Answer was Corrrect"
                    nextquestion();                 
                } else {
                    i++;
                    timeLeft = timeLeft-10;
                    lastAnswer.textContent = "Last Answer was Wrong"
                    nextquestion();
                } 
            }                 
        );        
    };      
};

// next question 
function nextquestion () {
    if (i < quizData.length) {
        startQuestion();        
    } else {
        quizQuestion.style.display = "none";
        quizEnd.style.visibility = "visible";
    }    
}

// stores highscore
function init() {
    var storedScores = JSON.parse(localStorage.getItem("hiscore"));
    if (storedScores !== null) {
        hiscore = storedScores;
    }
    
}

// submits and adds to highscores
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var scores = {
        person: initialsInput.value,
        score: timeLeft,
    }
    hiscore.push(scores);
    localStorage.setItem("hiscore", JSON.stringify(hiscore));
    quizEnd.style.display = "none";
    highscores.style.visibility = "visible"; 
    renderHiscore();  

});

// renders scoreboard
function renderHiscore() {

    highScoreList.innerHTML = "";
    hiscore.sort(function (a, b){return b.score - a.score});
  
    for (var i = 0; i < hiscore.length; i++) {
      var listInitials = hiscore[i].person;
      var listScore = hiscore[i].score;
  
      var li = document.createElement("li");
      li.textContent = listInitials + ":     " + listScore;
      li.setAttribute("data-index", i);  
      highScoreList.appendChild(li);
    }
}

// listener for retake button
retakeButton.addEventListener('click', function (event) {
    location.reload();
});

//  listener for clear button
clearButton.addEventListener('click', function (event) {
    localStorage.clear();
    highScoreList.innerHTML = "";    
});

// listener for highscore display
showhighscoreButton.addEventListener('click', function (event) {
    quizStart.style.display = "none";
    quizQuestion.style.display = "none";
    quizEnd.style.display = "none";
    timerEl.style.visibility = "hidden";
    highscores.style.visibility = "visible"; 
    renderHiscore();
});

init();




  