function computerPlay() {
    let number = Math.floor(Math.random() * 10);
    let choice;
    for ( let i=0;number==0;i++){
        i--;
    }
    if (number==1 || number==4 || number==7) {
        choice='Rock';
    }
    else if (number==2 || number==5 || number==8){
        choice='Paper';
    }
    else {
        choice="Scissor";
    }
    return choice;
}