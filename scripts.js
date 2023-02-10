function getComputerChoice () {
    let options = ["Rock", "Paper", "Scissors"]

    let randomPick = options[randomIntFromInterval(0,2)]
    return randomPick
}



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  let computerChoice = getComputerChoice()