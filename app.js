function getComputerChoice(){
let choices = ['rock', 'paper', 'scissor'];
randomIndex = Math.floor(Math.random()* choices.length);
return choices[randomIndex];
}

function getHumanChoice(){
    let humanInput = prompt("Choose rock, paper or scissor");

    return humanInput;
}



