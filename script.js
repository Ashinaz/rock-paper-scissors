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
    return window.prompt().toLowerCase()
}

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
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
        return "human"
    }else {
        return "computer"
    }
}

function playGame() {
    let winner
    let humanScore = 0
    let computerScore = 0

    for(let rounds = 0; rounds < 5; rounds++) {
        winner = playRound()
        if(winner == "human") (humanScore += 1)
            else computerScore += 1
    }

    if (humanScore > computerScore) {
        return `Human is the winner! With a score of ${humanScore}`
    } else {
        return `Computer is the winner! With a score of ${computerScore}`
    }
}

