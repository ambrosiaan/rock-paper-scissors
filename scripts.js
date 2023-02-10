function getComputerChoice () {
    let options = ["Rock", "Paper", "Scissors"]

    let randomPick = options[randomIntFromInterval(0,2)]
    return randomPick
}



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function playSingleRound(playerSelection, computerSelection) {
  }

function getUserInput() {
    let userChoice = prompt("Please choose your weapon: Rock, Paper or Scissors").toLowerCase();
    let userInputValid = checkValidityUserInput(userChoice);
    while (!userInputValid) {
        let userChoice = prompt("That was not a valid choice! Please choose between 'Rock', 'Paper' and 'Scissors'").toLowerCase();
        userInputValid = checkValidityUserInput(userChoice);
    }
    return userChoice
}

let userChoice = getUserInput();

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


function testRandomness() {
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
                exception("Invalid answer")
            }
        }
    console.log(`In ${n} turns computer has chosen Rock ${rockCounter} times`)
    console.log(`In ${n} turns computer has chosen Paper ${paperCounter} times`)
    console.log(`In ${n} turns computer has chosen Scissors ${scissorsCounter} times`)
}