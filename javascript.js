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

const playButtons = document.querySelectorAll(`.playButton`);
playButtons.forEach((button) =>
  button.addEventListener("click", playRoundFromButton)
);

function playRoundFromButton(e) {
  let playerChoice = this.getAttribute("data-key");

  document.getElementById("playerChoiceIcon").textContent =
    emojis[playerChoice];

  computerSelection = getComputerChoice();
  document.getElementById("compChoiceIcon").textContent =
    emojis[computerSelection];

  [playerWins, returnMessage] = playRound(playerChoice, computerSelection);

  if (playerWins != null) {
    if (playerWins) {
      winningIcon = emojis[playerChoice];
      userScore++;
    } else {
      winningIcon = emojis[computerSelection];
      computerScore++;
    }
  }
  document.getElementById("winningIcon").textContent = winningIcon;
  document.getElementById("winningMessage").textContent = returnMessage;

  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;

  if (userScore == 5 || computerScore == 5) {
    alert(`Game Over! ${userScore == 5 ? "You Win!" : "Computer Wins!"}`);
  }
}

const emojis = { rock: "🗿", paper: "💵", scissors: "✄" };
let userScore = 0;
let computerScore = 0;
let winningIcon = "";
