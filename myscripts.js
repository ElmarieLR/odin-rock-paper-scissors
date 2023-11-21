let playerScore = 0;
let computerScore = 0;

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
      console.log(playerSelection);
      console.log(computerSelection);
      playRound(playerSelection, computerSelection);
    }

    function playRound(playerSelection, computerSelection) {
      console.log("play");
      
      // Display player and computer choices
      const playerDecision = document.querySelector("#player_selection");
      playerDecision.textContent = `Player chose ${playerSelection}.`;
      
      const computerDecision = document.querySelector("#computer_selection");
      computerDecision.textContent = `Computer chose ${computerSelection}.`;
    }
  
}