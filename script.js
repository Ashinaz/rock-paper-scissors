const buttons = document.querySelectorAll(".human")
for (let button of buttons) {
    button.addEventListener("click", playGame)
}

function getComputerChoice() {
    let getRandomNumber = Math.floor(Math.random() * 3)
    switch(getRandomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

let rounds = 0

function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    let humanWin = (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice== "paper" && computerChoice == "rock") ||
        (humanChoice== "scissors" && computerChoice == "paper")
    )
    let computerWin = (
        (computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice== "paper" && humanChoice == "rock") ||
        (computerChoice== "scissors" && humanChoice == "paper")
    )
    rounds++
    console.log(rounds)
    if (humanWin) {
        return "human"
    }else {
        return "computer"
    }
}

function playGame(e) {
    let humanScore = 0
    let computerScore = 0
    let humanChoice = e.target.value
    let winner = playRound(humanChoice)
    if (winner = "human") {
        humanScore++
    }else computerScore++
}
