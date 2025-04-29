//create 3 variables for rock, paper, and scissors
const rock = 1;
const scissors = 2;
const paper = 3;

//add choice buttons to the dom
const buttons = document.createElement("div");
const rockButton = document.createElement("button"); 
const paperButton = document.createElement("button"); 
const scissorsButton = document.createElement("button"); 

//Add labels for buttons
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

document.body.appendChild(buttons);
buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);

const results = document.createElement("div");
let resultOutput = document.createElement("h3");
let yourScore = document.createElement("p");
let thereScore = document.createElement("p");

document.body.appendChild(results);
results.appendChild(resultOutput);
results.appendChild(yourScore);
results.appendChild(thereScore);

let getHumanChoice;

rockButton.addEventListener("click", () => {
    getHumanChoice = 1
    playRound();
})

paperButton.addEventListener("click", () => {
    getHumanChoice = 3
    playRound();
})

scissorsButton.addEventListener("click", () => {
    getHumanChoice = 2
    playRound();
})

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
// function getHumanChoice() {
//     let correctInput = false;
//     while (correctInput === false) {
//         let userInput = prompt("Choose Rock, Paper or Scissors: ")
//         userInput = userInput.toLowerCase();
//         if (userInput === "rock") {
//             return rock
//             correctInput = true;
//         } else if (userInput === "scissors") {
//             return scissors;
//             correctInput = true;
//         } else if (userInput === "paper") {
//             return paper;
//             correctInput = true;
//         } else {
//             console.log("Incorrect input, please try again")
//         }
//     }
// }



//actually play the game with a function:
function playRound () {
    console.log(getHumanChoice)
    const humanChoice = getHumanChoice;
    const computerChoice = getComputerChoice();
    // let player = 0; //humanScore;
    // let computer = 0; //computerScore;
    if (computerChoice === rock) {
        if (humanChoice === paper) {
            console.log("You Win! Paper beats Rock!");
            resultOutput.textContent = "You Win! Paper beats Rock!";
            // return [player += 1, computer];
        } else if (humanChoice === scissors) {
            console.log("You Lose! Rock beats Scissors")
            resultOutput.textContent = "You Lose! Rock beats Scissors";
            // return [player, computer +=1];
        } else {
            console.log("It's a Tie! You both chose Rock!")
            resultOutput.textContent = "It's a Tie! You both chose Rock!";
            // return [player, computer];
        }
    } else if (computerChoice === paper) {
        if (humanChoice === scissors) {
            console.log("You Win! Scissors beats Paper!");
            resultOutput.textContent = "You Win! Scissors beats Paper!";
            // return [player += 1, computer]
        } else if (humanChoice === rock) {
            console.log("You Lose! Paper beats Rock!")
            resultOutput.textContent = "You Lose! Paper beats Rock!";
            // return [player, computer +=1];
        } else {
            console.log("It's a Tie! You both chose Paper!")
            resultOutput.textContent = "It's a Tie! You both chose Paper!";
            // return [player, computer];
        }
    } else {
        if (humanChoice === rock) {
            console.log("You Win! Rock beats Scissors!");
            resultOutput.textContent = "You Win! Rock beats Scissors!";
            // return [player += 1, computer]
        } else if (humanChoice === paper) {
            console.log("You Lose! Scissors beats Paper!")
            resultOutput.textContent = "You Lose! Scissors beats Paper!";
            // return [player, computer +=1];
        } else {
            console.log("It's a Tie! You both chose Scissors!")
            resultOutput.textContent = "It's a Tie! You both chose Scissors!";
            // return [player, computer];
        }
    }
}

// function playGame() {
//     let playerScore = 0;
//     let cpuScore = 0;
//     let increment = 0;
//     while (increment < 5) {
//         [playerScore,cpuScore] = playRound(playerScore, cpuScore);
//         increment +=1;
//     }
//     console.log(`Your score is ${playerScore}`)
//     console.log(`The Computer Score is ${cpuScore}`)
//     if ((playerScore-cpuScore)>0) {
//         alert("You Win!")
//     } else if ((playerScore-cpuScore) < 0) {
//         alert("You Lose")
//     } else {
//         alert("It's a Tie!")
//     }
// }



// let play = playGame();
// console.log(play)