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
