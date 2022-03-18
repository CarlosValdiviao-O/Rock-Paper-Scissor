function computerPlay() {
    let number = Math.floor(Math.random() * 10);
    let choice;

    //if random number is 0 roll again, so we only get numbers 1-9
    while (number==0) {
        number = Math.floor(Math.random() * 10);
    }

    if (number%3==0) {
        choice='rock';
    }
    else if (number%3==1){
        choice='paper';
    }
    else {
        choice="scissors";
    } 
    return choice;
}

function playRound (playerSelection, computerSelection) {
    console.log(`The computer draw: ` + computerSelection.substr(0,1).toUpperCase() + computerSelection.substr(1));
    if (playerSelection==computerSelection){
        console.log("Tie!");
    }
    else if (playerSelection=='rock'){
        if (computerSelection=='paper'){
            console.log("You lose! Paper beats rock");
        }
        else {
            console.log("You win! Rock beats scissors");
        }
    }
    else if (playerSelection=='paper'){
        if (computerSelection=='scissors'){
            console.log("You lose! Scissors beats paper");
        }
        else {
            console.log("You win! Paper beats rock");
        }
    }
    else {
        if (computerSelection=='rock'){
            console.log("You lose! Rock beats scissors");
        }
        else {
            console.log("You win! Scissors beats paper");
        }
    }
}
