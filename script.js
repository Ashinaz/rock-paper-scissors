const buttons = document.querySelectorAll(".human")
for (let button of buttons) {
    button.addEventListener("click", playGame)
}
const winText = document.querySelector(".win")

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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    let humanWin = (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice== "paper" && computerChoice == "rock") ||
        (humanChoice== "scissors" && computerChoice == "paper")
    )
    let computerWin = (
        (computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice == "paper" && humanChoice == "rock") ||
        (computerChoice == "scissors" && humanChoice == "paper")
    )
    console.log(humanWin)
    console.log(computerWin)
    console.log(humanChoice)
    console.log(computerChoice)

    if (humanWin) {
        return "human"
    }else if (computerWin) {
        return "computer"
    } else return "draw"
}

let humanScore = 0
let computerScore = 0
let rounds = 0

function playGame(e) {
    let humanChoice = e.target.value
    let winner = playRound(humanChoice)
    console.log(winner)
    if (rounds < 5) {
        if (winner == "human") {
            winText.textContent = `Round ${rounds+1}: You are the winner!`
            humanScore++
            rounds++
        }else if (winner =="computer") {
            winText.textContent = `Round ${rounds+1}: You Lost!`
            computerScore++
            rounds++
        } else if (winner == "draw") {
            winText.textContent = `Round ${rounds+1}: It's a draw!`
            rounds++
        }

        if (rounds == 5) {
            if (humanScore > computerScore) {
                winText.textContent = `You are the winner of Roshambo with a score of ${humanScore}`
            }else if (computerScore > humanScore) {
                winText.textContent = `You are the loser of Roshambo with a score of ${humanScore}`
            } else if (humanScore == computerScore) {
                winText.textContent = `You tied with a score of ${humanScore}`
            }
        }

    }

    }
