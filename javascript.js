let humanScore = 0;
let computerScore = 0;
const choice = document.querySelector("#choices");
    
choice.addEventListener("click", playRound);


function getComputerChoice() {
    const randomNum = Math.random() *100;
    if(randomNum < 33) {
       return "rock";
    } else if (randomNum < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}
    
function checkWinner(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock")  return "draw";
        if (computerChoice == "paper") return "loss";
        if (computerChoice == "scissors") return "win";
    }    
    if (humanChoice == "paper") {
        if (computerChoice == "rock") return "win";
        if (computerChoice == "paper") return "draw";
        if (computerChoice == "scissors") return "loss";
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") return "loss";
        if (computerChoice == "paper") return "win";
        if (computerChoice == "scissors") return "draw"; 
    }
}
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = checkWinner(humanChoice.target.id, computerChoice);
    const resultDOM = document.querySelector("#result");
    switch (result) {
        case "draw": 
            result = "It's a draw, try again.";
            break;
        case "loss":
            result = "You lost, bummer.";
            computerScore++;
            break;
        case "win":
            result = "You win, congrats.";
            humanScore++;
            break;
    }
    resultDOM.textContent = "The computer chose " + computerChoice + "\n" + result.concat("\nScore: YOU: ", humanScore.toString(), " ||  COMPUTER: ", computerScore.toString());
    checkIfGameOver(); 
}

function checkIfGameOver() {
    if (humanScore == 5) {
        const winner = document.querySelector("#winner");
        winner.textContent = "Congrats, you won the game!";
        choice.removeEventListener("click", playRound);
    }
    if (computerScore == 5) {
        const winner = document.querySelector("#winner");
        winner.textContent = "You lost the game!";
        choice.removeEventListener("click", playRound);
    }
}
