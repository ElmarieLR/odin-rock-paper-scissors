//played from console

//Computer choice - randomly return 'Rock’, ‘Paper’ or ‘Scissors’

const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choiceArray[(Math.floor(Math.random() * choiceArray.length))];
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

//Prompt player choice with case-insensitive parameter

let playerInput = prompt("What is your choice: Rock, Paper of Scissors", "rock");

function caseInsensitive(playerInput) {
  playerInput = playerInput.toLowerCase();
  return(playerInput[0].toUpperCase() +
      playerInput.slice(1));
}

const playerSelection = caseInsensitive(playerInput); 

//Play single round of RPS and return a string that declares the winner of the round 

function playRound(playerSelection, computerSelection) {
  let roundOutcome = ""
  if (playerSelection === computerSelection) {
    return roundOutcome = "It's a tie";
  } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    return roundOutcome = `${playerSelection} beats ${computerSelection}. You win this round!`;
  } else {
    return roundOutcome = `${computerSelection} beats ${playerSelection}. You lose this round!`;
  }
}

console.log(playRound(playerSelection, computerSelection));

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
//At this point you should be using console.log() to display the results of each round and the winner at the end.

//Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
//Feel free to create more “helper” functions if you think it would be useful.


//When making interactive projects, like this one, you might be tempted to add more features, improve interactivity, user experience, design and styling of your website, and so on.
//We recommend not doing that, and saving this effort for your portfolio projects.
