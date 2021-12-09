console.log("hello!");

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}
function playRound(playerSelection, computerSelection) {
    let msg = "";
    if (playerSelection === computerSelection) {
        msg = "It's a draw";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors") ||
        (playerSelection === "rock") && (computerSelection === "paper") ||
        (playerSelection === "scissors") && (computerSelection === "rock")) {
        msg = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock") ||
        (playerSelection === "rock") && (computerSelection === "scissors") ||
        (playerSelection === "scissors") && (computerSelection === "paper")) {
        msg = `You lose! ${playerSelection} lost to ${computerSelection}`;
    }
    else {
        msg = `${playerSelection} is not a valid input`;
    }
    return msg;
}

function game(rounds) {
    let i = 0;
    while (i < rounds) {
        console.log(`Round #${i+1}`);
        const playerSelection = prompt("Your choice").toLowerCase();
        const computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));
        i++;
    }
}
const rounds = 5;

game(rounds);
