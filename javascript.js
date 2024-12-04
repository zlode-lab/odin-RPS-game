let humanScore = 0;
let computerScore = 0;



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
function getHumanChoice() {
    let input = prompt("Rock, Paper, Scissors?");
    let lowCaseInput = input.toLowerCase();
    console.log(lowCaseInput)
    if (lowCaseInput !== "rock" && lowCaseInput !== "paper" && lowCaseInput !== "scissors") {
        console.log(input + " is neither Rock, Paper or Scissors.");
        lowCaseInput = getHumanChoice();
    }
    return lowCaseInput;
}
function checkWinner(humanChoice, computerChoice) {
    console.log(humanChoice + " " + computerChoice);
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
function playRound(humanChoice, computerChoice) {
    let result;
    switch (checkWinner(humanChoice, computerChoice)) {
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
    console.log("The computer chose " + computerChoice + "\n" + result.concat("\nScore: YOU: ", humanScore.toString(), " ||  COMPUTER: ", computerScore.toString()));
}
function playGame() {
    while(humanScore < 5 && computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore == 5) {
        console.log("Congrats, you won the game!");
    }
    if (computerScore == 5) {
        console.log("You lost the game!");
    }
}