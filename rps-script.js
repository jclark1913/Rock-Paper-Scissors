// Selection variables
let playerChoice = 0;
let computerChoice = 0;

// Score variables
let playerScore = 0;
let computerScore = 0;

// Click events
const rockButton = document.getElementById("rockChoice");
rockButton.addEventListener('click', function () {
    playerChoice = 'rock';
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    setRoundIcons(playerChoice, computerChoice);
    updateTicker(playerScore, computerScore);
    updateScoreboard(playerScore, computerScore);
    checkGameOver(playerScore, computerScore);
    
});

const scissorsButton = document.getElementById("scissorsChoice");
scissorsButton.addEventListener('click', function () {
    playerChoice = 'scissors';
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    setRoundIcons(playerChoice, computerChoice);
    updateTicker(playerScore, computerScore);
    updateScoreboard(playerScore, computerScore);
    checkGameOver(playerScore, computerScore);
});

const paperButton = document.getElementById('paperChoice');
paperButton.addEventListener('click', function () {
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    setRoundIcons(playerChoice, computerChoice);
    updateTicker(playerScore, computerScore);
    updateScoreboard(playerScore, computerScore);
    checkGameOver(playerScore, computerScore);
})

// Update scoreboard
const computerScoreboard = document.getElementById('computerScoreboard');
const playerScoreboard = document.getElementById('playerScoreboard');
function updateScoreboard(playerScore, computerScore){
    computerScoreboard.textContent = `Computer: ${computerScore}`;
    playerScoreboard.textContent = `Player: ${playerScore}`;
}


// Generate computer choice
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'rock';
        case 1: return 'scissors';
        case 2: return 'paper';
    }
}

// Play a round of RPS
const scoreboardTitle = document.getElementById('scoreboardTitle');
const descriptionText = document.getElementById('descriptionText');
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        scoreboardTitle.textContent = "It's a tie!"
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        scoreboardTitle.textContent = "Player beats computer!";
        playerScore++;
    } else {
        scoreboardTitle.textContent = "Computer beats player!"
        computerScore++;
    }
    playerScoreboard.textContent = `Player: ${playerScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
}

// Update icons
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
function setRoundIcons(playerChoice) {
    if (playerChoice === 'rock') {
        playerIcon.src = "./images/rock-icon.svg"
    } else if (playerChoice === 'scissors') {
        playerIcon.src = "./images/scissors-icon.svg"
    } else if (playerChoice === 'paper') {
        playerIcon.src = "./images/paper-icon.svg"
    }
    if (computerChoice === 'rock') {
        computerIcon.src = "./images/rock-icon.svg"
    } else if (computerChoice === 'scissors') {
        computerIcon.src = "./images/scissors-icon.svg"
    } else if (computerChoice === 'paper') {
        computerIcon.src = "./images/paper-icon.svg"
    }
}

// Ticker update
const ticker = document.getElementById('ticker');
function updateTicker(playerScore, computerScore){
    ticker.textContent = '';

}

// Disable buttons
function disableButtons (){
    rockButton.disabled = true;
    scissorsButton.disabled = true;
    paperButton.disabled = true;
}

// Enable buttons
function enableButtons(){
    rockButton.disabled = false;
    scissorsButton.disabled = false;
    paperButton.disabled = false;
}

// Reset icons
function resetIcons(){
    playerIcon.src = "./images/user-icon.svg";
    computerIcon.src = "./images/computer-icon.svg"
}

// End game
let tryAgainButton = document.createElement('button');
function checkGameOver(playerScore, computerScore){
    if (playerScore === 5 || computerScore === 5) {
        tryAgainButton.innerHTML = 'Click here to play again!';
        tryAgainButton.classList.add("tryAgainButton");
        ticker.appendChild(tryAgainButton);
        tryAgainButton.addEventListener('click', restartGame);
        disableButtons();
        resetIcons();
        if (playerScore > computerScore){
            scoreboardTitle.textContent = "You won!"
            descriptionText.textContent = `Nice one! Player beats computer ${playerScore} - ${computerScore}.`
        } else {
            scoreboardTitle.textContent = "You lost!"
            descriptionText.textContent = `Hard luck! Computer beats player ${computerScore} - ${playerScore}.`
        }
    } 
}

// Restart game
function restartGame(){
    resetIcons();
    enableButtons();
    playerScore = 0;
    computerScore = 0;
    updateScoreboard(playerScore, computerScore);
    ticker.removeChild(tryAgainButton);
    ticker.textContent = "Good luck!";
    scoreboardTitle.textContent = "Click an icon to begin"
    descriptionText.textContent = "First to 5 points wins!"
}
