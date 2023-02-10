function getComputerChoice () {
    let options = ["Rock", "Paper", "Scissors"]

    let randomPick = options[randomIntFromInterval(0,2)]
    return randomPick
}



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  let computerChoice = getComputerChoice()
  testRandomness()


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