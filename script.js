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
