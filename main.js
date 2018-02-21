
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  const arr = ["Rock", "Paper", "Scissors"];

  return arr[getRandomInt(0,2)];
}

function playRound(playerSelection, computerSelection) {
  if ( (computerSelection === 'rock' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'paper') || (computerSelection === 'scissors' && playerSelection === 'scissors')) {
    return "It\'s a tie!";
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    console.log("Paper beats Rock");
    return "You Win!";
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    console.log("Rock beats Scissors");
    return "You Lose!";
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log("Paper beats Rock");
    return "You Lose!";
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    console.log("Scissors beats Paper");
    return "You Win!";
  }  else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    console.log("Rock beats Scissors");
    return "You Win!";
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log("Scissors beats Paper");
    return "You Lose!";
  } else {
    return null;
  }
}

function game() {
  let count = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (count < 5) {
    const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    const computerSelection = computerPlay().toLowerCase();

    if (playRound(playerSelection, computerSelection) === "You Win!") {
      playerScore++;
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
    } else if (playRound(playerSelection, computerSelection) === "You Lose!") {
      computerScore++;
      console.log("Player: " + playerScore);
      console.log("Computer: " + computerScore);
    } else if (playRound(playerSelection, computerSelection) === "It\'s a tie!"){
      console.log("It\'s a tie!");
      count--;
    } else {
      console.log("Please enter Rock, Paper or Scissors!");
      count--;
    }

    count++;
  }

  return playerScore > computerScore ? "You Win!" : "You Lose!";
}

console.log(game());
