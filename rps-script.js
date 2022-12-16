// Selection variables
let playerChoice = 0;
let computerChoice = 0;

// Score variables
let playerScore = 0;
let computerScore = 0;

// Click events
const rockButton = document.getElementById("rockChoice");
rockButton.addEventListener('click', function() {
    playerChoice = 'rock';
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

const scissorsButton = document.getElementById("scissorsChoice");
scissorsButton.addEventListener('click', function() {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

const paperButton = document.getElementById('paperChoice');
paperButton.addEventListener('click', function() {
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

// Update scoreboard
const computerScoreboard = document.getElementById('computerScoreboard');
computerScoreboard.textContent = `Computer: ${computerScore}`;

const playerScoreboard = document.getElementById('playerScoreboard');
playerScoreboard.textContent = `Player: ${playerScore}`;

// Generate computer choice
function getComputerChoice (){
    switch (Math.floor(Math.random() * 3)){
        case 0: return 'rock';
        case 1: return 'scissors';
        case 2: return 'paper';
    }
}

// Play a round of RPS

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        console.log("tie");
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win");
        playerScore++;
    } else {
        console.log("You lose");
        computerScore++;
    }
    playerScoreboard.textContent = `Player: ${playerScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
}
