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
    let paperBeatsRock = (
        (computerChoice == "paper" ||humanChoice == "paper") &&
        (computerChoice == "rock" || humanChoice == "rock")
    )
    let rockBeatsScissors = (
        (computerChoice == "rock" ||humanChoice == "rock") &&
        (computerChoice == "scissors" || humanChoice == "scissors")
    )
    let scissorsBeatsPaper = (
        (computerChoice == "scissors" ||humanChoice == "scissors") &&
        (computerChoice == "paper" || humanChoice == "paper")
    )
    
}