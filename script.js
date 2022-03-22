const rock = document.getElementById('rock');
rock.addEventListener("click", updatePick);

const paper = document.getElementById('paper');
paper.addEventListener("click", updatePick);

const scissors = document.getElementById('scissors');
scissors.addEventListener("click", updatePick);

let computerScore = 0;
let playerScore = 0;

function updatePick() {
    document.getElementById("pChoice").textContent = this.textContent;
    playRound(computerPlay(), this.textContent);
}

function playRound (computerSelection, playerSelection) {
    let message;
    if (computerScore>4 || playerScore>4){
        computerScore =0;
        playerScore = 0;
        document.getElementById('endGame').innerHTML = '';
    }
    if (playerSelection==computerSelection){
        message = `Tie!`;
    }
    else if (playerSelection=='Rock'){
        if (computerSelection=='Paper'){
            message = "You lose! Paper beats rock";
            computerScore++;
        }
        else {
            message = "You win! Rock beats scissors";
            playerScore++;
        }
    }
    else if (playerSelection=='Paper'){
        if (computerSelection=='Scissors'){
            message = "You lose! Scissors beats paper";
            computerScore++;
        }
        else {
            message = "You win! Paper beats rock";
            playerScore++;
        }
    }
    else {
        if (computerSelection=='Rock'){
            message = "You lose! Rock beats scissors";
            computerScore++;
        }
        else {
            message = "You win! Scissors beats paper";
            playerScore++;
        }
    }

    document.getElementById('message').textContent = message;
    document.getElementById('score').textContent = `Computer: ${computerScore} Player: ${playerScore}`;

    if (computerScore>4){
        document.getElementById('endGame').innerHTML = 'Game Finished! The computer has won five matches <button id="end">Try Again?</button>';
        const end = document.getElementById('end');
        end.addEventListener("click", newGame);
    }
    else if (playerScore>4){
        document.getElementById('endGame').innerHTML = 'Game Finished! You have beaten the computer! <button id="end">Try Again?</button>';
        const end = document.getElementById('end');
        end.addEventListener("click", newGame);
    }
}

function newGame(){
    document.getElementById('endGame').innerHTML = '';
    computerScore=0;
    playerScore=0;
    document.getElementById('score').textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    document.getElementById("cChoice").textContent = '';
    document.getElementById("pChoice").textContent = '';
}

function computerPlay() {
    let number = Math.floor(Math.random() * 10);
    let choice;
    //if random number is 0 roll again, so we only get numbers 1-9
    while (number==0) {
        number = Math.floor(Math.random() * 10);
    }
    if (number%3==0) {
        choice='Rock';
        document.getElementById("cChoice").textContent = 'Rock';
    }
    else if (number%3==1){
        choice='Paper';
        document.getElementById("cChoice").textContent = 'Paper';
    }
    else {
        choice="Scissors";
        document.getElementById("cChoice").textContent = 'Scissors';
    } 
    return choice;
}