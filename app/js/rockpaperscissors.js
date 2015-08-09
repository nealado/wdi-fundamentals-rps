////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove == computerMove) {
        winner = 'tie'
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        winner = 'computer';
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        winner = 'player';
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        winner = 'player';
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        winner = 'computer';
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        winner = 'computer';
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        winner = 'player';
    }
        return winner;

    }


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

while (computerWins < 5 && playerWins < 5) {
    
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    
    if (winner == "computer") {
        computerWins = computerWins + 1;
    }
    else if (winner == "player") {
        playerWins = playerWins + 1;
    }
    else if (winner == "tie") {
        computerWins = computerWins + 0;
        playerWins = playerWins + 0;
    }
    
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + ' of 5');
}
    return [playerWins, computerWins];
}

playToFive();