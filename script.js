//create 3 variables for rock, paper, and scissors
const rock = 1;
const scissors = 2;
const paper = 3;

//create a function that will generate a computer Choice:
function getComputerChoice() {
    let choice = Math.floor(Math.random()*(4-1)+1);
    if (choice === 1) {
        return rock;
    }else if (choice === 2) {
        return scissors;
    } else {
        return paper;
    }
}

//create function to get user choice:
function getHumanChoice() {
    let correctInput = false;
    while (correctInput === false) {
        let userInput = prompt("Choose Rock, Paper or Scissors: ")
        userInput = userInput.toLowerCase();
        if (userInput === "rock") {
            return rock
            correctInput = true;
        } else if (userInput === "scissors") {
            return scissors;
            correctInput = true;
        } else if (userInput === "paper") {
            return paper;
            correctInput = true;
        } else {
            console.log("Incorrect input, please try again")
        }
    }
}

let humanScore = 0;
let computerScore = 0


//actually play the game with a function:
function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (computerChoice === rock) {
        if (humanChoice === paper) {
            humanScore += 1;
            console.log("You Win! Paper beats Rock!");
        } else if (humanChoice === scissors) {
            computerScore +=1;
            console.log("You Lose! Rock beats Scissors")
        } else {
            console.log("It's a Tie! You both chose Rock!")
        }
    } else if (computerChoice === paper) {
        if (humanChoice === scissors) {
            humanScore += 1;
            console.log("You Win! Scissors beats Paper!");
        } else if (humanChoice === rock) {
            computerScore +=1;
            console.log("You Lose! Paper beats Rock!")
        } else {
            console.log("It's a Tie! You both chose Paper!")
        }
    } else {
        if (humanChoice === rock) {
            humanScore += 1;
            console.log("You Win! Rock beats Scissors!");
        } else if (humanChoice === paper) {
            computerScore +=1;
            console.log("You Lose! Scissors beats Paper!")
        } else {
            console.log("It's a Tie! You both chose Scissors!")
        }
    }
}