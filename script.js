function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

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

document.getElementById('rock').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
    document.getElementById('result').textContent = `You chose Rock. Computer chose ${computerChoice}. Score: You ${humanscore} - Computer ${computerscore}`;
} );

document.getElementById('paper').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
    document.getElementById('result').textContent = `You chose Paper. Computer chose ${computerChoice}. Score: You ${humanscore} - Computer ${computerscore}`;
}); 

document.getElementById('scissors').addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
    document.getElementById('result').textContent = `You chose Scissors. Computer chose ${computerChoice}. Score: You ${humanscore} - Computer ${computerscore}`;
});

