//played from console - keep simple. Design will be added later.

let score = 0;

const choiceArray = ["Rock", "Paper", "Scissors"];

//This is a 5 round game that keeps score and reports a winner or loser at the end.
//The computer's selection and the results of each round are also displayed.

function game() {

  for (let rounds = 1; rounds <= 5; rounds++) {

    //Prompt player choice with case-insensitive parameter

    let playerInput = prompt("What is your choice: Rock, Paper or Scissors", "rock");

    function caseInsensitive(userInput) {
      userInput = userInput.toLowerCase();
      return(userInput[0].toUpperCase() + userInput.slice(1));
    }

    const playerSelection = caseInsensitive(playerInput);

    //Computer choice - randomly return 'Rock’, ‘Paper’ or ‘Scissors’

    function getComputerChoice() {
      return choiceArray[(Math.floor(Math.random() * choiceArray.length))];
    }
    
    const computerSelection = getComputerChoice();
    
    console.log(`The computer chose ${computerSelection}`);

    //Play single round of RPS and return a string that declares the winner of the round 

    function playRound(playerSelection, computerSelection) {
      let roundOutcome = ""
      if (playerSelection === computerSelection) {
        rounds--;
        return roundOutcome = `You both chose ${playerSelection}. It's a tie.`;
      } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        score++;
        return roundOutcome = `${playerSelection} beats ${computerSelection}. You win this round! Score: ${score}/${rounds}`;
      } else {
        return roundOutcome = `${computerSelection} beats ${playerSelection}. You lose this round! Score: ${score}/${rounds}`;
      }
    }

    console.log(playRound(playerSelection, computerSelection));
  }
  
  //Who won the game
  let gameOutcome = "";
  if (score >= 3) {
    return gameOutcome = `You won ${score} out of 5 rounds. You win the game!`
  } else {
    return gameOutcome = `You won ${score} out of 5 rounds. The computer wins the game!`
  }
  
  console.log(gameOutcome);
}

console.log(game());





