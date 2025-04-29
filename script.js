//create 3 variables for rock, paper, and scissors
const rock = 1;
const scissors = 2;
const paper = 3;

const reset = document.getElementById("reset");
//add choice buttons to the dom
const buttons = document.createElement("div");
const rockButton = document.createElement("button"); 
const paperButton = document.createElement("button"); 
const scissorsButton = document.createElement("button"); 

buttons.classList.add("play-buttons");

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
let playerScore = 0;
let cpuScore = 0;
resultOutput.textContent = "Let's Play!"

reset.addEventListener("click", () => {
    playerScore = 0;
    cpuScore = 0;
    yourScore.textContent = playerScore;
    thereScore.textContent = cpuScore;
    resultOutput.textContent = "Play Again!"
});

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

//actually play the game with a function:
function playRound () {
    console.log(getHumanChoice)
    const humanChoice = getHumanChoice;
    const computerChoice = getComputerChoice();
    if (computerChoice === rock) {
        if (humanChoice === paper) {
            console.log("You Win! Paper beats Rock!");
            resultOutput.textContent = "You Win! Paper beats Rock!";
            playerScore +=1;
        } else if (humanChoice === scissors) {
            console.log("You Lose! Rock beats Scissors")
            resultOutput.textContent = "You Lose! Rock beats Scissors";
            cpuScore +=1;
        } else {
            console.log("It's a Tie! You both chose Rock!")
            resultOutput.textContent = "It's a Tie! You both chose Rock!";
        }
    } else if (computerChoice === paper) {
        if (humanChoice === scissors) {
            console.log("You Win! Scissors beats Paper!");
            resultOutput.textContent = "You Win! Scissors beats Paper!";
            playerScore +=1;
        } else if (humanChoice === rock) {
            console.log("You Lose! Paper beats Rock!")
            resultOutput.textContent = "You Lose! Paper beats Rock!";
            cpuScore +=1;
        } else {
            console.log("It's a Tie! You both chose Paper!")
            resultOutput.textContent = "It's a Tie! You both chose Paper!";
        }
    } else {
        if (humanChoice === rock) {
            console.log("You Win! Rock beats Scissors!");
            resultOutput.textContent = "You Win! Rock beats Scissors!";
            playerScore +=1;
        } else if (humanChoice === paper) {
            console.log("You Lose! Scissors beats Paper!")
            resultOutput.textContent = "You Lose! Scissors beats Paper!";
            cpuScore +=1;
        } else {
            console.log("It's a Tie! You both chose Scissors!")
            resultOutput.textContent = "It's a Tie! You both chose Scissors!";
        }
    }
    yourScore.textContent = playerScore;
    thereScore.textContent = cpuScore;

    if (playerScore >= 5) {
        resultOutput.textContent = "You Win! Press Reset to Start Over"
    } else if (cpuScore >= 5) {
        resultOutput.textContent = "The Computer Wins! Press Reset to Start Over"
    }
}

