let userScore = 0
let computerScore = 0
let gameOver = false

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playRound)
})

function playRound(e) {
    if (gameOver) resetGame();
    let computerChoice = getComputerChoice();
    let userChoice = e.target.innerText;
    let result = determineWinner(userChoice, computerChoice);
    updateScore(result);
    checkWinner();
}

function getComputerChoice () {
    let options = ["Rock", "Paper", "Scissors"]
    let randomPick = options[randomIntFromInterval(0,2)]
    return randomPick
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        displayResults(`Its a tie! ${playerSelection} equals ${computerSelection}. Try again`)
        return 'Tie'
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'
    || playerSelection === 'Paper' && computerSelection === 'Rock'
    || playerSelection === 'Rock' && computerSelection === 'Scissors') {
        displayResults(`You win! ${playerSelection} beats ${computerSelection}`)
        return 'PlayerWon'
    }
    else {
        displayResults(`You lose! ${computerSelection} beats ${playerSelection}`)
        return 'ComputerWon'
    }
}

function displayResults(resultText) { 
    document.querySelector('#resultBox').innerText = resultText
}

function updateScore(result) {
    if (result === 'PlayerWon'){
        userScore++
        document.querySelector('#userScore').innerText = `User: ${userScore}`
    }
    else if (result === 'ComputerWon'){
        computerScore++
        document.querySelector('#computerScore').innerText = `Computer: ${computerScore}`
    }
}

function checkWinner(){
    if (userScore >= 5) {
        document.querySelector('#gameResult').innerText = `User has won 5 rounds, game over!`
        gameOver = true
    }
    else if (computerScore >=5) {
        document.querySelector('#gameResult').innerText = `Computer has won 5 rounds, game over!`
        gameOver = true
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    gameOver = false;
    document.querySelector('#userScore').innerText = `User: ${userScore}`;
    document.querySelector('#computerScore').innerText = `Computer: ${computerScore}`;
    document.querySelector('#gameResult').innerText = ``;
}

function testRandomnessComputerChoice() {
    let rockCounter = 0;
    let paperCounter = 0;
    let scissorsCounter = 0;
    let n = 10000
        for (i= 0; i<n; i++){
            let computerChoice = getComputerChoice()
            console.log(computerChoice)
            switch (computerChoice) {
                case "Rock":
                rockCounter++
                break;
                case "Paper":
                paperCounter++
                break;
                case "Scissors":
                scissorsCounter++
                break;
                default:
                console.log("Invalid answer")
            }
        }
    console.log(`In ${n} turns computer has chosen Rock ${rockCounter} times`)
    console.log(`In ${n} turns computer has chosen Paper ${paperCounter} times`)
    console.log(`In ${n} turns computer has chosen Scissors ${scissorsCounter} times`)
}