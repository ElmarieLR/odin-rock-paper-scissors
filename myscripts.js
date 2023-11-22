//This game keeps score until a player reaches 5 points and then reports the winner.
//The computer's selection and the results of each round are displayed. 

let playerScore = 0;
let computerScore = 0;
let roundOutcome = "";

//Computer choice - randomly return 'Rock’, ‘Paper’ or ‘Scissors’

const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choiceArray[(Math.floor(Math.random() * choiceArray.length))];
}

// Start

document.querySelector("#startBtn").addEventListener("click", gameStart);

function gameStart() {
  document.querySelector("#start").style.display = "none";
  document.querySelector("#play").style.display = "block";
  document.querySelector("#results").style.display = "block";
  console.log("started");

  // Player chooses with button, event listeners takes player choice 
    
  document.querySelector("#rock").addEventListener("click", choices);

  document.querySelector("#paper").addEventListener("click", choices);

  document.querySelector("#scissors").addEventListener("click", choices);
}

// Define choices and start a round

function choices(event) {
  const playerSelection = event.target.value;
  const computerSelection = getComputerChoice();
  // Display player and computer choices

  const playerDecision = document.querySelector("#player_selection");
  playerDecision.textContent = `Player chose ${playerSelection}.`;

  const computerDecision = document.querySelector("#computer_selection");
  computerDecision.textContent = `Computer chose ${computerSelection}.`;

  playRound(playerSelection, computerSelection);
}

// Winner of round 

function playRound(playerSelection, computerSelection) {
  console.log("play");

  if (playerSelection === computerSelection) {
    roundOutcome = `You both chose ${playerSelection}. It's a tie.
    Player: ${playerScore}
    Computer: ${computerScore}`;
    console.log("tied");
    roundResult();
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock") || 
    (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
    playerScore++;
    roundOutcome = 
      `${playerSelection} beats ${computerSelection}. 
      You win this round!
      Player: ${playerScore}
      Computer: ${computerScore}`;
    console.log("win");
    roundResult();
  } else {
    computerScore++;
    roundOutcome = 
      `${computerSelection} beats ${playerSelection}. 
      You lose this round!
      Player: ${playerScore}
      Computer: ${computerScore}`;
    console.log("lose");
    roundResult();
  } 
}

function roundResult() {
  const roundResultMessage = document.querySelector("#round-result");
  roundResultMessage.textContent = roundOutcome;
  if (playerScore < 5 && computerScore < 5) {
    gameStart();
  } else {
    document.querySelector("#play").style.display = "none";
    endResult();
  }
}

function endResult() {
  if (playerScore === 5) {
    const roundResultMessage = document.querySelector("#score");
    roundResultMessage.textContent = "CONGRATULATIONS! YOU WON!"
  } else if (computerScore === 5) {
    const roundResultMessage = document.querySelector("#score");
    roundResultMessage.textContent = "Sorry! You lost!"
  }
  document.querySelector("#start_over").style.display = "block";
}

// Play again

document.querySelector("#start_over_button").addEventListener("click", startAgain);

function startAgain() {
  location.reload();
}