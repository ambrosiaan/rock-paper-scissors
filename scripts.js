function getComputerChoice () {
    let options = ["Rock", "Paper", "Scissors"]
    let randomPick = options[randomIntFromInterval(0,2)]
    return randomPick
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function capitalizeFirstLetter(stringToCapitalize){
    const capitalized = stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
    return capitalized
}

function checkValidityUserInput(userInput) {
    switch (userInput) {
        case "rock":
        case "paper":
        case "scissors":
        return true;
        default:
        return false
    }
}

function getUserInput() {
    let userChoice = prompt("Please choose your weapon: Rock, Paper or Scissors").toLowerCase();
    let userInputValid = checkValidityUserInput(userChoice);
    while (!userInputValid) {
        let userChoice = prompt("That was not a valid choice! Please choose between 'Rock', 'Paper' and 'Scissors'").toLowerCase();
        userInputValid = checkValidityUserInput(userChoice);
    }
    return capitalizeFirstLetter(userChoice)
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Its a tie! ${playerSelection} equals ${computerSelection}. Try again`)
        return 'Tie'
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'
    || playerSelection === 'Paper' && computerSelection === 'Rock'
    || playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return 'PlayerWon'
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return 'ComputerWon'
    }
}

function game(numberOfRounds) {
    let userScore = 0
    let computerScore = 0
    for (let i = 1; i <= numberOfRounds; i++){
        let result = 'Tie'
        while (result === 'Tie'){
            let userChoice = getUserInput();
            let computerChoice = getComputerChoice();
            result = playSingleRound(userChoice, computerChoice)
        }
        if (result === 'PlayerWon'){
            userScore++
        }
        else if (result === 'ComputerWon'){
            computerScore++
        }
        else { 
            console.log("Invalid outcome") 
        }
        console.log(`You have played ${i} rounds. Your have won ${userScore} rounds and lost ${computerScore} rounds` )
    }
    userScore > computerScore ? console.log(`You won! You have won ${userScore} rounds and lost ${computerScore} rounds`)
    : console.log(`You lost! You have won ${userScore} rounds and lost ${computerScore} rounds`)
}

game(5);

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