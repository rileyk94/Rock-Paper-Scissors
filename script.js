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

//actually play the game with a function:
function playRound (humanScore, computerScore) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let player = humanScore;
    let computer = computerScore;
    if (computerChoice === rock) {
        if (humanChoice === paper) {
            console.log("You Win! Paper beats Rock!");
            return [player += 1, computer];
        } else if (humanChoice === scissors) {
            console.log("You Lose! Rock beats Scissors")
            return [player, computer +=1];
        } else {
            console.log("It's a Tie! You both chose Rock!")
            return [player, computer];
        }
    } else if (computerChoice === paper) {
        if (humanChoice === scissors) {
            console.log("You Win! Scissors beats Paper!");
            return [player += 1, computer]
        } else if (humanChoice === rock) {
            console.log("You Lose! Paper beats Rock!")
            return [player, computer +=1];
        } else {
            console.log("It's a Tie! You both chose Paper!")
            return [player, computer];
        }
    } else {
        if (humanChoice === rock) {
            console.log("You Win! Rock beats Scissors!");
            return [player += 1, computer]
        } else if (humanChoice === paper) {
            console.log("You Lose! Scissors beats Paper!")
            return [player, computer +=1];
        } else {
            console.log("It's a Tie! You both chose Scissors!")
            return [player, computer];
        }
    }
}

function playGame() {
    let playerScore = 0;
    let cpuScore = 0;
    let increment = 0;
    while (increment < 5) {
        [playerScore,cpuScore] = playRound(playerScore, cpuScore);
        increment +=1;
    }
    console.log(`Your score is ${playerScore}`)
    console.log(`The Computer Score is ${cpuScore}`)
    if ((playerScore-cpuScore)>0) {
        alert("You Win!")
    } else if ((playerScore-cpuScore) < 0) {
        alert("You Lose")
    } else {
        alert("It's a Tie!")
    }
}

let play = playGame();
console.log(play)