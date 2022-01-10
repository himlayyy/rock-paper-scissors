const choices = ["Rock", "Paper", "Scissors"]

function displayChoices(playerChoice, computerChoice) {
    let playerMove = document.querySelector("#player-choice");
    let computerMove = document.querySelector("#computer-choice");

    playerMove.src = `${playerChoice}-user.png`;
    computerMove.src = `${computerChoice}-comp.png`;


}
function displayResult(message, winner) {
    let messageContainer = document.querySelector(".result");
    if (winner != null) {
        if (winner === "comp") {
            inc = document.querySelector("#computer-score");
        }
        else if (winner === "player") {
            inc = document.querySelector("#player-score");
        }

        let newScore = parseInt(inc.innerHTML) + 1;
        inc.innerHTML = newScore;
        if (newScore === 5) {
            console.log(`${winner} won`);
            gameWinner = document.createElement("p");
            gameWinner.innerHTML = `Game over! ${winner.toUpperCase()} won`;
            disableButtons();
        }
        messageContainer.innerHTML = message;        
        messageContainer.append(gameWinner);
    }
    else{
        messageContainer.innerHTML = message;
    }
}

function evaluateRound(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    displayChoices(playerChoice, computerChoice);
    let message = "";
    let winner = "";
    switch (playerChoice + computerChoice) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            message = "Tie";
            winner = null;
            break;
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            winner = "player";
            message = "You Win!";
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            winner = "comp";
            message = "You lose!"
            break;
    }
    displayResult(message, winner);
}

function disableButtons() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.remove();
    }
    )
    replay()
}
function replay() {
    let replayBtn = document.createElement("button");
    replayBtn.innerHTML = "Replay";
    replayBtn.setAttribute("class", "button");
    let options = document.querySelector(".options");
    options.appendChild(replayBtn);
    replayBtn.addEventListener("click", () => {
        location.reload(true);

    })
    
}
let makeBtns = choices.forEach(
    (choice) => {
        let options = document.querySelector(".options");
        let btn = document.createElement("button");
        btn.setAttribute("class", "button");
        btn.id = choice.toLowerCase();
        btn.innerText = choice;
        options.appendChild(btn);
        btn.addEventListener('click', function (e) {
            evaluateRound(e.target.id);
        });
    }
)
makeBtns

