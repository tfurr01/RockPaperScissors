let computerSelection;
let playerSelection;

playerPlay();
computerPlay();
console.log(playRound(playerSelection, computerSelection));

function computerPlay() {
    computerSelection = Math.random();
    if (computerSelection < .334) {
        computerSelection = 'rock'
    }
    else if (computerSelection < .667) {
        computerSelection = 'paper'
    }
    else {
        computerSelection = 'scissors'
    }
}

function playerPlay() {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    //Should put something in here to validate entry 
}

function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = "You lose! Paper beats Rock!";
        }
        else if (computerSelection === 'scissors') {
            result = "You win! Rock beats Scissors!";
        }
        else if (computerSelection ==='rock') {
            result = "It's a tie!";
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            result = "It's a tie!";
        }
        else if (computerSelection === 'scissors') {
            result = "You lose! Scissors beats Paper!";
        }
        else if (computerSelection === 'rock') {
            result = "You win! Paper beats Rock!";
        }
    }

    else {
        if (computerSelection === 'paper') {
            result = "You win! Scissors beats Paper!";
        }
        else if (computerSelection === 'rock') {
            result = "You lose! Rock beats Scissors!";
        }
        else if (computerSelection === 'scissors') {
            result = "It's a tie!";
        }
    }
    return result;
}