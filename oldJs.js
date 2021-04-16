let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

game();

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
            computerScore++;
        }
        else if (computerSelection === 'scissors') {
            result = "You win! Rock beats Scissors!";
            playerScore++;
        }
        else if (computerSelection ==='rock') {
            result = "It's a tie!";
            ties++;
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            result = "It's a tie!";
            ties++;
        }
        else if (computerSelection === 'scissors') {
            result = "You lose! Scissors beats Paper!";
            computerScore++;
        }
        else if (computerSelection === 'rock') {
            result = "You win! Paper beats Rock!";
            playerScore++;
        }
    }

    else {
        if (computerSelection === 'paper') {
            result = "You win! Scissors beats Paper!";
            playerScore++;
        }
        else if (computerSelection === 'rock') {
            result = "You lose! Rock beats Scissors!";
            computerScore++;
        }
        else if (computerSelection === 'scissors') {
            result = "It's a tie!";
            ties++;
        }
    }
    return result;
}

function game() {
    //play 5 games, keeping track of who wins each game
    for (let i = 1; i <= 5; i++) {
        playerPlay();
        computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    //compare wins vs losses and declare winner of the match
    if (playerScore > computerScore) {
        console.log(`You win the match ${playerScore} to ${computerScore}!`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lose the match ${computerScore} to ${playerScore}!`);
    }
    else {
        console.log(`The match is a tie! ${playerScore} - ${computerScore} - ${ties}`);
    }
}