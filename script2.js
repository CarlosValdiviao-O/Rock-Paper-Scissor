const rock = document.getElementById('rock');
rock.addEventListener("click", updatePick);

const paper = document.getElementById('paper');
paper.addEventListener("click", updatePick);

const scissors = document.getElementById('scissors');
scissors.addEventListener("click", updatePick);

function updatePick() {
    document.getElementById("pChoice").textContent = this.textContent;
    playRound(computerPlay(), this.textContent);
}

function playRound (computerSelection, playerSelection) {
    console.log (`c: ${computerSelection} p: ${playerSelection}`)
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