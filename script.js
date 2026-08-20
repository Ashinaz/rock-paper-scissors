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

let getHumanChoice = () => {
    let humanPick = window.prompt().toLowerCase()
    return humanPick
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice()
    humanChoice = getComputerChoice()
    let humanScore = 0
    let computerScore = 0
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

    if (humanWin) {
        humanScore++
    }else if (computerWin) {
        computerScore++
    }
}