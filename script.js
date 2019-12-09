var initialNumber;
var userGuessLog =[];
var attempts = 0;
var maxGuesses = 10;

function easyMode() {
  maxGuesses = 10;
}

function hardMode() {
  maxGuesses = 5;
}

function newGame() {
  window.location.reload();

}

function init() {
  initialNumber = Math.floor(Math.random() *100 + 1);
  // console.log(initialNumber);
  document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
  var userGuess =" " + document.getElementById('inputBox').value;
  // console.log(userGuess)

 userGuessLog.push(userGuess);
 // console.log(userGuessLog);
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
      document.getElementById("textOutput").innerHTML = "Correct";
    }
  } else {
    if(userGuess > initialNumber) {
      document.getElementById('textOutput').innerHTML = "You have no more guesses";
    } else if (userGuess < initialNumber) {
      document.getElementById('textOutput').innerHTML = "ou have no more guesses";
    } else {
      document.getElementById('textOutput').innerHTML = "Correct";
    }
  }

}
