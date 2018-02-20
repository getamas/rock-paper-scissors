
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  const arr = ["Rock", "Paper", "Scissors"];

  return arr[getRandomInt(0,2)];
}

function playRound(playerSelection, computerSelection) {
  if ( (computerSelection === 'rock' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'paper') || (computerSelection === 'scissors' && playerSelection === 'scissors')) {
    return "It\'s a tie play again!"
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    playerScore++;
    return "You Win! Paper beats Scissors"
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    computerScore++;
    return "You Lose! Rock beats Scissors"
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    computerScore++;
    return "You Lose! Paper beats Rock"
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playerScore++;
    return "You Win! Scissors beats Paper"
  }  else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playerScore++;
    return "You Win! Rock beats Scissors"
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    computerScore++;
    return "You Lose! Scissors beats Paper"
  }
}

// function game() {
//   while (playerScore < 5 || computerScore < 5) {
//     playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
//   }
//
//   return playerScore === 5 ? "You Win!" : "You Lose!"
// }

let playerScore = 0;
let computerScore = 0;
const playerSelection = prompt("Rock, paper or scissors?");
const computerSelection = computerPlay();

console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
console.log("Player: " + playerScore);
console.log("Computer: " + computerScore);
