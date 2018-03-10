"use strict";

var playerWon = updateWin();
var playerLost = updateLosses();
var tied = updateDraws();

// hiding the score variables
function updateWin() {
  var wins = 0;

  return function () {
    wins++;
    document.getElementById("won").innerHTML = wins;
  }
}

function updateLosses() {
  var losses = 0;

  return function () {
    losses++;

    document.getElementById("loss").innerHTML = losses;
  }
}

function updateDraws() {
  var draws = 0;

  return function () {
    draws++;
    document.getElementById("draw").innerHTML = draws;
  }
}

// game starts with user pressing the appropriate key
document.onkeyup = function(event){

  var userInput = event.key.toLowerCase();
  
  
	if ((userInput === "r") || (userInput === "p") || (userInput === "s")) {
		var computerGuess = computerChoice();

    if ((userInput === "r") && (computerGuess === "s")) {
      playerWon();
    }
    else if ((userInput === "r") && (computerGuess === "p")) {
      playerLost();
    }
    else if ((userInput === "s") && (computerGuess === "r")) {
      playerLost();
    }
    else if ((userInput === "s") && (computerGuess === "p")) {
      playerWon();
    }
    else if ((userInput === "p") && (computerGuess === "r")) {
      playerWon();
    }
    else if ((userInput === "p") && (computerGuess === "s")) {
      playerLost();
    }
    else{
      tied();
    }

  document.getElementById("playerChoice").innerHTML = userInput;
  document.getElementById("computer").innerHTML = computerGuess;

  }
}

//computer selects from array of options
function computerChoice(){
  // valid choices
  var validChoices = ["r", "p", "s"];
  var rand = Math.floor((Math.random() * validChoices.length - 1) + 1);
  return validChoices[rand];
}
