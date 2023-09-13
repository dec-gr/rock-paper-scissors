console.log("Hello World");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let numberChoice = Math.floor(Math.random() * 3);
  return choices[numberChoice];
}

function playerSelection() {
  return prompt("Make a choice!").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let playerWins;
  let isTie = false;
  let returnMessage;

  if (playerSelection === computerSelection) {
    isTie = true;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      playerWins = false;
    } else {
      playerWins = true;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      playerWins = false;
    } else {
      playerWins = true;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      playerWins = false;
    } else {
      playerWins = true;
    }
  }

  if (isTie) {
    returnMessage = `Both tie!`;
  } else if (playerWins) {
    returnMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    returnMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  return [playerWins, returnMessage];
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  let returnMessage;

  let playerChoice;
  let computerSelection;

  while (userScore < 5 && computerScore < 5) {
    playerChoice = playerSelection();
    computerSelection = getComputerChoice();
    [playerWins, returnMessage] = playRound(playerChoice, computerSelection);

    console.log(returnMessage);

    if (playerWins != null) {
      userScore += playerWins;
      computerScore += playerWins;
    }
  }

  if (userScore === 5) {
    console.log("You Win!");
  } else {
    console.log("Computer Wins!");
  }
}
