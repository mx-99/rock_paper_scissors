let buttons = document.querySelector('#btnBlock');
let result1 = document.querySelector('#result1');
let result = document.querySelector('#result');
let rock = document.createElement('button');
let paper = document.createElement('button');
let scissor = document.createElement('button');
let score = document.createElement('p');
let finalScore = document.createElement('p');

rock.textContent = 'rock';
paper.textContent = 'paper';
scissor.textContent = 'scissor'

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissor);
result1.appendChild(score);
result.appendChild(finalScore);

function getComputerChoice(){                                                                            
let choices = ['rock', 'paper', 'scissor'];                                                              
let randomIndex = Math.floor(Math.random()* choices.length);                                             
return choices[randomIndex];                                                                             
}                                                                                                           
                                                                                                        
function playGame(){                                                                                                 
 let humanScore = 0;                                                                                                  
let computerScore = 0;                                                                                         
    
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        score.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'scissor' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        score.textContent = `You win! ${humanChoice} beats ${computerChoice} ${humanScore}`;
    } else {
        computerScore++;
        score.textContent = `Computer won: ${computerChoice} beats ${humanChoice} ${computerScore}`;
    }
    updateFinalScore();
}
                                                                                                        
 buttons.addEventListener('click', (event)=>{
let target = event.target;
let buttonText = target.textContent.trim();
    switch(buttonText){
            case 'rock':
            case 'paper':
            case 'scissor':
            let computerChoice = getComputerChoice();
            playRound(buttonText,computerChoice);
             break;
    }
});                                                                                                        

function updateFinalScore() {
    finalScore.textContent = `Final Score Human: ${humanScore} Computer: ${computerScore}`;
       if (humanScore >= 5) {
    setTimeout(() => {
      alert(score.textContent = `You win::  Human ${humanScore} Computer ${computerScore} `);
      resetGame()
    }, 0)
    return
  } else if (computerScore >= 5) {
      setTimeout(() => {
      alert(score.textContent = `You lost::  Computer ${computerScore} Human ${humanScore} `);
      resetGame()
    }, 0)
    return
  }
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    score.textContent = '';
    finalScore.textContent = '';
}
}
playGame()