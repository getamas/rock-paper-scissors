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
    playerSelection = prompt('Rock, Paper or Scissors?');

    if (playerSelection.toLowerCase() === 'rock' && 
        computerSelection.toLowerCase() === 'paper') {
        computerScore += 1;
        return 'You Lose! Paper beats Rock.'
    } else if (playerSelection.toLowerCase() === 'rock' && 
               computerSelection.toLowerCase() === 'scissors') {
        playerScore += 1;
        return 'You Win! Rock beats Scissors.'
    } else if (playerSelection.toLowerCase() === 'rock' && 
               computerSelection.toLowerCase() === 'rock') {
        return 'Draw!'
    } else if (playerSelection.toLowerCase() === 'paper' && 
               computerSelection.toLowerCase() === 'rock') {
        playerScore += 1;
        return 'You Win! Paper beats Rock.'
    } else if (playerSelection.toLowerCase() === 'paper' && 
               computerSelection.toLowerCase() === 'scissors') {
        computerScore += 1;
        return 'You Lose! Scissors beats Paper.'
    } else if (playerSelection.toLowerCase() === 'paper' && 
               computerSelection.toLowerCase() === 'paper') {
        return 'Draw!'
    } else if (playerSelection.toLowerCase() === 'scissors' && 
               computerSelection.toLowerCase() === 'rock') {
        computerScore += 1;
        return 'You Lose! Rock beats Scissors.'
    } else if (playerSelection.toLowerCase() === 'scissors' && 
               computerSelection.toLowerCase() === 'paper') {
        playerScore += 1;
        return 'You Win! Scissors beats Paper.'
    } else if (playerSelection.toLowerCase() === 'scissors' && 
               computerSelection.toLowerCase() === 'scissors') {
        return 'Draw!'
    }
}

function game() {
    let playerSelection;
    const computerSelection = computerPlay();

    for (let count = 1; count <= 5; count++) {
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