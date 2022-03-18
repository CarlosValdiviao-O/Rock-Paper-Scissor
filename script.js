console.log("Type: game() to start playing");
console.log("");
console.log("");
console.log("");
console.log("");
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
    let message;
    if (playerSelection==computerSelection){
        return message = `Tie! ` + computerSelection.substr(0,1).toUpperCase() + computerSelection.substr(1);
    }
    else if (playerSelection=='rock'){
        if (computerSelection=='paper'){
            return message = "You lose! Paper beats rock"
        }
        else {
            return message = "You win! Rock beats scissors"
        }
    }
    else if (playerSelection=='paper'){
        if (computerSelection=='scissors'){
            return message = "You lose! Scissors beats paper"
        }
        else {
            return message = "You win! Paper beats rock"
        }
    }
    else {
        if (computerSelection=='rock'){
            return message = "You lose! Rock beats scissors"
        }
        else {
            return message = "You win! Scissors beats paper"
        }
    }
}

function playerSelection() {
    let pick = prompt("Make your pick! Type: Rock, Paper or Scissors","");
    pick=pick.toLowerCase();
    if ( pick == 'rock' || pick == 'scissors' || pick == 'paper'){}
    else {
        alert("Invalid input. Try again");
        pick = playerSelection();
    }
    return pick;
}

function game(){
    let matchResult,
        computerScore=0,
        playerScore=0;
    for (let i=0; i<5; i++){
        matchResult = playRound(playerSelection(),computerPlay());
        if (matchResult.substring(0,3)=="Tie"){
            console.log(`The computer draw: ` + matchResult.substring(5));
            console.log('Tie!');
        }
        else if (matchResult.substring(0,7)=='You win'){
            playerScore++;
            if (matchResult.substring(9,13)=='Rock') {
                console.log(`The computer draw: Scissors`);
                console.log (matchResult);
            }
            else if (matchResult.substring(9,13)=='Pape') {
                console.log(`The computer draw: Rock`);
                console.log (matchResult);
            }
            else {
                console.log(`The computer draw: Paper`);
                console.log (matchResult);
            }
        }
        else {
            computerScore++;
            if (matchResult.substring(10,14)=='Rock') {
                console.log(`The computer draw: Rock`);
                console.log (matchResult);
            }
            else if (matchResult.substring(10,14)=='Pape') {
                console.log(`The computer draw: Paper`);
                console.log (matchResult);
            }
            else {
                console.log(`The computer draw: Scissors`);
                console.log (matchResult);
            }
        }
        console.log(`Computer: ` + computerScore + `  You: ` + playerScore);
    }
    if (computerScore>playerScore){
        console.log("End of game. You have been defeated by the computer... (F).");
    }
    else if (playerScore>computerScore){
        console.log("End of game. You defeated the computer! Well played!");
    }
    else {
        console.log("End of game. It seems there's a tie :/. Try again");
    }
}