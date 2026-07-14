function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getUserChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return userInput;
}
console.log(getUserChoice());

let humanscore = 0;
let computerscore = 0;

function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        humanscore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        computerscore++;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(userSelection, computerSelection);
    }
    if (humanscore > computerscore) {
        console.log(`You won the game! Final score: You ${humanscore} - Computer ${computerscore}`);
    }
    else if (humanscore < computerscore) {
        console.log(`You lost the game! Final score: You ${humanscore} - Computer ${computerscore}`);
    }
    else {
        console.log(`The game is a tie! Final score: You ${humanscore} - Computer ${computerscore}`);
    }
}
