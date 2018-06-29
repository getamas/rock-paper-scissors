let playerScore = 0;
let computerScore = 0;

function randomize(upper) {
    return Math.floor(Math.random() * upper);
}

function computerPlay() {
    const figures = ['rock', 'paper', 'scissors'];

    return figures[randomize(figures.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (playerSelection === 'rock' && 
        computerSelection === 'rock' ||
        playerSelection === 'paper' && 
        computerSelection === 'paper' || 
        playerSelection === 'scissors' && 
        computerSelection === 'scissors') {
        return 'Draw!'
    } else if (playerSelection === 'rock' && 
               computerSelection === 'paper') {
        computerScore += 1;
        return 'You Lose! Paper beats Rock.'
    } else if (playerSelection === 'rock' && 
               computerSelection === 'scissors') {
        playerScore += 1;
        return 'You Win! Rock beats Scissors.'
    } else if (playerSelection === 'paper' && 
               computerSelection === 'rock') {
        playerScore += 1;
        return 'You Win! Paper beats Rock.'
    } else if (playerSelection === 'paper' && 
               computerSelection === 'scissors') {
        computerScore += 1;
        return 'You Lose! Scissors beats Paper.'
    } else if (playerSelection === 'scissors' && 
               computerSelection === 'rock') {
        computerScore += 1;
        return 'You Lose! Rock beats Scissors.'
    } else if (playerSelection === 'scissors' && 
               computerSelection === 'paper') {
        playerScore += 1;
        return 'You Win! Scissors beats Paper.'
    }
}

function game() {
    let playerSelection;

    for (let count = 1; count <= 5; count++) {
        const computerSelection = computerPlay().toLowerCase();
        console.log('Round ' + count + ': ' + playRound(playerSelection, computerSelection) + ' ' + playerScore + ':' + computerScore);
    }

    if (computerScore === playerScore) {
        return 'Game: Draw!'
    } else if (computerScore > playerScore) {
        return 'Game: You Lose!'
    } else {
        return 'Game: You Win!'
    }
}

console.log(game());