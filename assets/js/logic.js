var timerEl = document.getElementById('timer');

function countdown() {
    var timeLeft = 10;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
  
      if(timeLeft === -1 ) {
        clearInterval(timeInterval);
        timerEl.textContent = 'times up';
      }
  
    }, 1000);
  }

  countdown();

// for creating buttons in the list
// var li5 = document.createElement("button");
// li5.textContent = "start";
// listEl.appendChild(li5);
  