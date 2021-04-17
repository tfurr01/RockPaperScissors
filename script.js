let computerSelection;
let playerSelection;
let result;
let runningScore;
let winner;
let roundResultText;
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let score = document.getElementById('score');
let playAgain = document.createElement('BUTTON');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundResult = document.getElementById('roundResult');
const gameResult = document.getElementById('gameResult');
const matchWinner = document.getElementById('winner');
const refresh = document.getElementById('playAgain');

rock.addEventListener("click", clickRock);

paper.addEventListener("click", clickPaper);

scissors.addEventListener("click", clickScissors);

function clickRock() {
    //clear text from previous game
    if (gameResult.hasChildNodes()) {
        gameResult.removeChild(result);
    }
    //remove old scoreboard
    if (score.hasChildNodes()) {
        score.removeChild(runningScore);
    }
    //remove old round results
    if (roundResult.hasChildNodes()) {
        roundResult.removeChild(roundResultText);
    }
    playerSelection = 'rock';
    computerPlay();
    //display selections
    roundResultText = document.createTextNode(`${playerSelection} vs ${computerSelection}`);
    roundResult.appendChild(roundResultText);

    playRound(playerSelection, computerSelection);
    //ending game if one of the scores gets to 5
    if (playerScore === 5 || computerScore === 5){
        gameOver();
    }
}
function clickScissors() {
    if (gameResult.hasChildNodes()) {
        gameResult.removeChild(result);
    }
    //remove old scoreboard
    if (score.hasChildNodes()) {
        score.removeChild(runningScore);
    }
    //remove old round results
    if (roundResult.hasChildNodes()) {
        roundResult.removeChild(roundResultText);
    }
    playerSelection = 'scissors';
    computerPlay();
    //display selections
    roundResultText = document.createTextNode(`${playerSelection} vs ${computerSelection}`);
    roundResult.appendChild(roundResultText);

    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5){
        gameOver();
    }
}
function clickPaper() {
    if (gameResult.hasChildNodes()) {
        gameResult.removeChild(result);
    }
    //remove old scoreboard
    if (score.hasChildNodes()) {
        score.removeChild(runningScore);
    }
    //remove old round results
    if (roundResult.hasChildNodes()) {
        roundResult.removeChild(roundResultText);
    }
    playerSelection = 'paper';
    computerPlay();
    //display selections
    roundResultText = document.createTextNode(`${playerSelection} vs ${computerSelection}`);
    roundResult.appendChild(roundResultText);

    playRound(playerSelection, computerSelection);

    if (playerScore === 5 || computerScore === 5){
        gameOver();
    }
}
function gameOver () {
    //remove click functionality
    paper.removeEventListener("click", clickPaper);
    scissors.removeEventListener("click", clickScissors);
    rock.removeEventListener("click", clickRock);
    //determine winner and announce
    if (playerScore > computerScore) {
        winner = document.createTextNode("You have defeated the computer! Congratulations!");
        matchWinner.appendChild(winner);
    }
    else {
        winner = document.createTextNode("You have been defeated by the computer! Better luck next time!");
        matchWinner.appendChild(winner);
    }
    //give option to play again
    playAgain.textContent = 'Play Again?';
    playAgain.setAttribute('id', 'refreshBtn');
    refresh.appendChild(playAgain);
    refresh.addEventListener("click", function() {
        location.reload();
        return false;
    })
}
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
function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = document.createTextNode("You lose! Paper beats Rock!");
            computerScore++;
        }
        else if (computerSelection === 'scissors') {
            result = document.createTextNode("You win! Rock beats Scissors!");
            playerScore++;
        }
        else if (computerSelection ==='rock') {
            result = document.createTextNode("It's a tie!");
            ties++;
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            result = document.createTextNode("It's a tie!");
            ties++;
        }
        else if (computerSelection === 'scissors') {
            result = document.createTextNode("You lose! Scissors beats Paper!");
            computerScore++;
        }
        else if (computerSelection === 'rock') {
            result = document.createTextNode("You win! Paper beats Rock!");
            playerScore++;
        }
    }

    else {
        if (computerSelection === 'paper') {
            result = document.createTextNode("You win! Scissors beats Paper!");
            playerScore++;            
        }
        else if (computerSelection === 'rock') {
            result = document.createTextNode("You lose! Rock beats Scissors!");
            computerScore++;
        }
        else if (computerSelection === 'scissors') {
            result = document.createTextNode("It's a tie!");
            ties++;
        }
    }

    gameResult.appendChild(result);    
    runningScore = document.createTextNode(`${playerScore} wins, ${computerScore} losses, and ${ties} ties`);
    score.appendChild(runningScore);
}



