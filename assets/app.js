"use strict";

// initial scores
var wins = 0;
var loses = 0;
var draws = 0;

// valid choices
var validChoices = ["r", "p", "s"];
var userInput = "";
var compSelect = "";
var result = "";

//computer selects from array of options
function computerChoice(){
	var rand = Math.floor((Math.random() * validChoices.length - 1) + 1);
	compSelect = validChoices[rand];
}

//updates per match results
function displayResults(){
	document.getElementById("playerChoice").innerHTML = userInput;
	document.getElementById("computer").innerHTML = compSelect;
	document.getElementById("matchResults").innerHTML = result;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("loses").innerHTML = loses;
	document.getElementById("draws").innerHTML = draws;
}

// game starts with user pressing the appropriate key
document.onkeyup = function(event){
	userInput = event.key;
	
	if (userInput === "r"){
		computerChoice();
		if (compSelect === "p"){
			loses++;
			result = "You lost";
		} else if (compSelect === "s"){
			wins++;
			result = "You won";
		} else {
			draws++;
			result = "It was a draw";
		}
		displayResults();

	} else if (userInput === "p"){
		computerChoice();
		if (compSelect === "s"){
			loses++;
			result = "You lost";
		} else if (compSelect === "r"){
			wins++;
			result = "You won";
		} else {
			draws++;
			result = "It was a draw";
		}
		displayResults();

	} else if(userInput === "s"){
		computerChoice();
		if (compSelect === "r"){
			loses++;
			result = "You lost";
		} else if (compSelect === "p"){
			wins++;
			result = "You won";
		} else {
			draws++;
			result = "It was a draw";
		}
		displayResults();
	}
}