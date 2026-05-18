const playerChoice = process.argv[2] ? process.argv[2].toLowerCase() : null;
const validChoices = ['rock', 'paper', 'scissors'];
if (!playerChoice || !validChoices.includes(playerChoice)) {
    console.log("Error: Not a valid move. Choose either 'rock', 'paper', or 'scissors'.");
    console.log("Example usage: node rockPaperScissors.js rock");
    process.exit(1);
}
const randomIndex = Math.floor(Math.random() * validChoices.length);
const computerChoise = validChoices[randomIndex];
let result = "";
if (playerChoice === computerChoise) {
    result = "draw draw draw!!";
    } else if(
        (playerChoice === 'rock' && computerChoise === 'scissors') ||
        (playerChoice === 'paper' && computerChoise === 'rock') ||
        (playerChoice === 'scissors' && computerChoise === 'paper')
    ) {
        result = "Winnerrrrrrrr!";
    } else {
        result = "Loserrrrrrr!";
    }
    console.log(`You chose ${playerChoice}. Computer chose ${computerChoise}. ${result}`);