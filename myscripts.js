let playerScore = 0;
let computerScore = 0;
let roundOutcome = "";

//Computer choice - randomly return 'Rock’, ‘Paper’ or ‘Scissors’

const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choiceArray[(Math.floor(Math.random() * choiceArray.length))];
}

//This game keeps score until a player reaches 5 points and then reports the winner.
//The computer's selection and the results of each round are displayed.

let startButton = document.querySelector("#startBtn");
startButton.addEventListener("click", game);

function game() {
  document.querySelector("#start").style.display = "none";
  document.querySelector("#play").style.display = "block";
  console.log("started");


    // Player chooses with button, event listeners takes player choice a
    
    let rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", choices);

    let paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", choices);

    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", choices);
  
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

    //Play single round of RPS and declares the winner of the round

    function playRound(playerSelection, computerSelection) {
      console.log("play");

      if (playerSelection === computerSelection) {
        roundOutcome = 
          `You both chose ${playerSelection}. It's a tie.`;
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
          You win this round!`;
        console.log("win");
        roundResult();
      } else {
        computerScore++;
        roundOutcome = 
          `${computerSelection} beats ${playerSelection}. 
          You lose this round!`;
        console.log("lose");
        roundResult();
      } 
    }

    function roundResult() {
      const roundResultMessage = document.querySelector("#round-result");
      roundResultMessage.textContent = roundOutcome;
    }
  
}