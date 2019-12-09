var initialNumber;
var userGuessLog =[];
var attempts = 0;
var maxGuesses = 10;

function gameEnded() {
  document.getElementById('newGameButton').style.display = 'inline';
  document.getElementById('easyBtn').style.display = 'none';
  document.getElementById('hardBtn').style.display = 'none';
  document.getElementById('inputBox').setAttribute('readonly', 'readonly')

}

function easyMode() {
  maxGuesses = 10;
  document.getElementById('easyBtn').className = 'activeButton';
  document.getElementById('hardBtn').className = '';
}

function hardMode() {
  maxGuesses = 5;
  document.getElementById('easyBtn').className = '';
  document.getElementById('hardBtn').className = 'activeButton';
}

function newGame() {
  window.location.reload();

}

function init() {
  initialNumber = Math.floor(Math.random() *100 + 1);
  console.log(initialNumber);
  document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
  var userGuess =" " + document.getElementById('inputBox').value;
  console.log(userGuess)

 userGuessLog.push(userGuess);
 console.log(userGuessLog);
 document.getElementById("guessLog").innerHTML = userGuessLog;

 attempts++;
 document.getElementById('attempts').innerHTML = attempts;

  if(userGuessLog.length < maxGuesses) {
    if(userGuess > initialNumber) {
      document.getElementById("textOutput").innerHTML = "Guess is too high";
      document.getElementById("inputBox").value ="";
    }
    else if (userGuess < initialNumber) {
      document.getElementById("textOutput").innerHTML = "Guess is too low";
      document.getElementById("inputBox").value ="";
    } else {
      document.getElementById("textOutput").innerHTML = "Correct in " +attempts+ " attempts";
      document.getElementById('container').style.backgroundColor = 'DarkGreen'
      gameEnded();
    }
  } else {
    if(userGuess > initialNumber) {
      document.getElementById('textOutput').innerHTML = "You have no more guesses  <br> The correct answer was " + initialNumber
      document.getElementById('container').style.backgroundColor = 'DarkGreen'
      gameEnded();
    } else if (userGuess < initialNumber) {
      document.getElementById('textOutput').innerHTML = "You have no more guesses <br> The correct answer was " + initialNumber ;
      document.getElementById('container').style.backgroundColor = 'DarkGreen'
      gameEnded();
    } else {
      document.getElementById('textOutput').innerHTML = "Correct in " +attempts+ " attempts";
      document.getElementById('container').style.backgroundColor = 'DarkGreen'
      gameEnded();
    }
  }

}
