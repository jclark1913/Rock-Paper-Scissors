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
    console.log(playerChoice);
    console.log(computerChoice);
});

const scissorsButton = document.getElementById("scissorsChoice");
scissorsButton.addEventListener('click', function() {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
});

const paperButton = document.getElementById('paperChoice');
paperButton.addEventListener('click', function() {
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
})

// Generate computer choice

function getComputerChoice (){
    switch (Math.floor(Math.random() * 3)){
        case 0: return 'rock';
        case 1: return 'scissors';
        case 2: return 'paper';
    }
}

