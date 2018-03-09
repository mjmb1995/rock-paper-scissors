"use strict";

// initial scores
var wins = 0;
var losses = 0;
var draws = 0;

// valid choices
var validChoices = ["r", "p", "s"];
var userInput = "";
var computerGuess = "";


//computer selects from array of options
function computerChoice(){
	var rand = Math.floor((Math.random() * validChoices.length - 1) + 1);
	computerGuess = validChoices[rand];
}

//updates per match results
function displayResults(){
	document.getElementById("playerChoice").innerHTML = userInput;
	document.getElementById("computer").innerHTML = computerGuess;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("draws").innerHTML = draws;
}

// game starts with user pressing the appropriate key
document.onkeyup = function(event){
	userInput = event.key;

	if ((userInput === "r") || (userInput === "p") || (userInput === "s")) {
		computerChoice();
        if ((userInput === "r") && (computerGuess === "s")) {
          wins++
        }
        else if ((userInput === "r") && (computerGuess === "p")) {
          losses++
        }
        else if ((userInput === "s") && (computerGuess === "r")) {
          losses++
        }
        else if ((userInput === "s") && (computerGuess === "p")) {
          wins++
        }
        else if ((userInput === "p") && (computerGuess === "r")) {
          wins++
        }
        else if ((userInput === "p") && (computerGuess === "s")) {
          losses++
        }
        else if (userInput === computerGuess) {
          draws++
        }
        displayResults();
    }
}