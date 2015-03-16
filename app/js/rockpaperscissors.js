///////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(playerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
<<<<<<< HEAD
    playerMove=playerMove||getInput();
    return playerMove;
=======
    return move=move||getInput();
>>>>>>> 9504ba14b39907d7b0e57c7b25cdeb25fb604258
}

function getComputerMove(computerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
<<<<<<< HEAD
    computerMove=computerMove||randomPlay();
    return computerMove;
}

function getPlayerMove(playerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    playerMove=playerMove||getInput();
    return playerMove;
}

function getComputerMove(computerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    computerMove=computerMove||randomPlay();
    return computerMove;
=======
    return move=move|| randomPlay();
>>>>>>> 9504ba14b39907d7b0e57c7b25cdeb25fb604258
}

function getWinner(playerMove,computerMove) {
   'use strict';
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
<<<<<<< HEAD
 	if (playerMove == computerMove) {
    	winner='tie';
    } else if ((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'paper' && computerMove == 'rock') || (playerMove == 'scissors' && computerMove == 'paper')) {
      winner='player';
    } else if ((playerMove == 'scissors' && computerMove == 'rock') ||(playerMove == 'paper' && computerMove == 'scissors') || (playerMove == 'rock' && computerMove == 'paper')) {winner='computer';
    } return winner;
=======
 var userChoice = prompt('Do you choose rock, paper or scissors?');
 var compChoice = Math.random();

 if (compChoice <= 0.34) {
 compChoice = 'rock';
 } else if (compChoice <= 0.67) {
 compChoice = 'paper';
 } else {
 compChoice = 'scissors';
 }
 
 function compare() {
     if (userChoice == compChoice) {
 console.log('The result is a tie!');
 } else if ((userChoice == 'rock' && compChoice == 'scissors') || (userChoice == 'paper' && compChoice == 'rock') || (userChoice == 'scissors' && compChoice == 'paper')) {
     console.log('You win!');
 } else if ((userChoice == 'scissors' && compChoice == 'rock') ||(userChoice == 'paper' && compChoice == 'scissors') || (userChoice == 'rock' && compChoice == 'paper')) {
     console.log('Computer wins!');
 }
 }
    return winner;
}

    return winner;
>>>>>>> 9504ba14b39907d7b0e57c7b25cdeb25fb604258
}
    
function playToFive() {
    'use strict';
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
    	var playerMove = getPlayerMove();
    	var computerMove = getComputerMove();
    	var winner = getWinner(playerMove, computerMove);
    	if (winner === 'player') {playerWins++}
    	else {computerWins++}
    	console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
	    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
    return [playerWins, computerWins];
}
playToFive();
