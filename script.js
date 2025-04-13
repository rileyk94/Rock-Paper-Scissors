const rock = 1;
const scissors = 2;
const paper = 3;
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

// const test = getComputerChoice();
// console.log(test);