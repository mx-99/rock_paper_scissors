function getComputerChoice(){
let choices = ['rock', 'paper', 'scissor'];
let randomIndex = Math.floor(Math.random()* choices.length);
return choices[randomIndex];
}

function getHumanChoice(){
    let humanInput = prompt("Choose rock, paper or scissor");
    humanInput = humanInput.toLowerCase();
    if(!(humanInput === 'rock'  || humanInput === 'paper' || humanInput ==='scissor')){
        humanInput = prompt("wrong input choice 'rock, paper, scissor'");
   }
    return humanInput;
}



function playGame(){
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    //Rock beats Scissors
    //Scissors beats Paper
    //Paper beats Rock
    
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock' && computerChoice === 'scissor'){
        humanScore++;
        console.log("You win Rock beats scissor: ", humanScore);
    }else if (humanChoice === 'scissor' && computerChoice === 'paper'){
        humanScore++;
        console.log("You win scissor beats paper: ", humanScore);
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log("You win paper beats rock: ", humanScore);
    } else if(humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} vs ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer won: ${computerChoice} beats ${humanChoice} ${computerScore}`)}
}

for(let i = 0; i<5;i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
console.log(`Final Score Human:= ${humanScore} Computer:= ${computerScore}`);
if (humanScore > computerScore){ 
 console.log(`You win by ${humanScore - computerScore} points`)
}else if (computerScore > humanScore){ 
    console.log(`You lost by ${computerScore - humanScore} points`);
} else {
    console.log("It's a tie!");
} 

}

playGame();


