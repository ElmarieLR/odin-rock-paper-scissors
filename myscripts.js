let playerScore = 0;
let computerScore = 0;

const choiceArray = ["Rock", "Paper", "Scissors"];

//This game keeps score until a player reaches 5 points and then reports the winner.
//The computer's selection and the results of each round are displayed.

function game() {

  while (playerScore < 5 && computerScore< 5) {

    
    let playerSelection = "";
    let computerSelection = "";

    //Player chooses with button
    
    let rockButton = document.querySelector("#rock");
    rockButton.addEventListener('click', playRound);

    let paperButton = document.querySelector("#paper");
    paperButton.addEventListener('click', playRound);

    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener('click', playRound);

    //Play single round of RPS and declares the winner of the round

    function playRound(playerSelection, computerSelection) {
      //Player choice
      let playerSelection = document.getElementsByClassName("choice").getAttribute("value");

      //Computer choice - randomly return 'Rock’, ‘Paper’ or ‘Scissors’
      computerSelection =  () => choiceArray[(Math.floor(Math.random() * choiceArray.length))];

      //Display player and computer choices
      const playerDecision = document.querySelector("#player_selection");
      playerDecision.textContent = `Player chose ${playerSelection}.`;

      const computerDecision = document.querySelector("#computer_selection");
      computerDecision.textContent = `Computer chose ${computerSelection()}.`;

      // Play round
      let roundOutcome = "";
      if (playerSelection === computerSelection) {
        return roundOutcome = 
          `You both chose ${playerSelection}. It's a tie.`;
      } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
          humanScore++;
        return roundOutcome = 
          `${playerSelection} beats ${computerSelection}. 
          You win this round!`;
      } else {
        computerScore++;
        return roundOutcome = 
          `${computerSelection} beats ${playerSelection}. 
          You lose this round!`;
      }
    }

    console.log(playRound(playerSelection, computerSelection));
  }
  
  //Who won the game
  let gameOutcome = "";
  if (humanScore === 5) {
    return gameOutcome = 
      `You win the game!`;
  } else {
    return gameOutcome = 
      `The computer wins the game!`;
  }
  
  console.log(gameOutcome);
}

console.log(game());