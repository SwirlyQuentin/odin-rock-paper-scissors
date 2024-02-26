let playerWins = 0;
let computerWins = 0;

function play(button){
    let comp = computerChoice();
    let player = playerChoice(button);
    let winner = decideWinner(player, comp);
    let pChoice = document.querySelector(".player-choice");
    let cChoice = document.querySelector(".computer-choice");
    let result = document.querySelector(".result");
    let pWins = document.querySelector(".player-wins");
    let cWins = document.querySelector(".computer-wins");

    pChoice.innerHTML = "Player Choice: " + player;
    cChoice.innerHTML = "Computer Choice: " + comp;
    result.innerHTML = "Winner: " + winner;
    pWins.innerHTML = playerWins;
    cWins.innerHTML = computerWins;

}

function computerChoice(){
    let choice = Math.floor(Math.random() * (2 - 0 + 1));
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1: 
        return "paper";
        break;

        case 2:
            return "scissors";
            break;
    }
}

function playerChoice(button){
    let choice = button;
    return choice;
}

function decideWinner(player, computer){
    let result = "None";
    if (player == "rock"){
        if (computer == "rock"){
            result = "Tie";
        }
        else if (computer == "paper"){
            result = "Computer";
            computerWins++;
        }
        else{
            result = "Player";
            playerWins++;
        }
        return result;
    }
    else if (player == "paper"){
        if (computer == "rock"){
            result = "Player";
            playerWins++;
        }
        else if (computer == "paper"){
            result = "Tie";
        }
        else{
            result = "Computer";
            computerWins++;
        }
        return result;
    }
    else{
        if (computer == "rock"){
            result = "Computer";
            computerWins++;
        }
        else if (computer == "paper"){
            result = "Player";
            playerWins++;
        }
        else{
            result = "Tie";
        }
        return result;
    }
}