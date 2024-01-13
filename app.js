let body = document.querySelector('body')
let buttons = document.createElement('div')
let div_score = document.createElement('div')
let p_vs_c = document.createElement('p')
let computer_score = document.createElement('p')
let player_score = document.createElement('p')
let rock = document.createElement('button')
let paper = document.createElement('button')
let scissor = document.createElement('button')
player_score.textContent = 'You  = ';
computer_score.textContent = 'Computer = ';
//button names
rock.textContent = 'rock'
paper.textContent = 'paper'
scissor.textContent = 'scissor'

// Event Listeners
rock.addEventListener('click', function () {
  playRound('rock')
})
paper.addEventListener('click', function () {
  playRound('paper')
})
scissor.addEventListener('click', function () {
  playRound('scissor')
})

  //childs append
body.appendChild(buttons);
body.appendChild(div_score);
body.appendChild(p_vs_c);
div_score.appendChild(player_score);
div_score.appendChild(computer_score);
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissor);

let result = '';
let p_score = 0;
let c_score = 0;
//play
function playRound(playerChoice) { 
  const choices = ['rock', 'paper', 'scissor'];
  const choices_index = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[choices_index];

  if (playerChoice == computerChoice) {
    p_vs_c.innerText = `${computerChoice.toUpperCase()} VS ${playerChoice.toUpperCase()} = Tie`;
  } else if (
    (playerChoice == 'rock' && computerChoice == 'scissor') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissor' && computerChoice == 'paper')
  ) {
    p_score += 1
    p_vs_c.innerText = `You Win! ${playerChoice.toUpperCase()} Beats ${computerChoice.toUpperCase()} `
    player_score.innerText = `You = ${p_score}`
  } else {
    c_score += 1
    p_vs_c.innerText = `You lost!!! ${computerChoice.toUpperCase()} Beats ${playerChoice.toUpperCase()} `
    computer_score.innerText = `Computer = ${c_score}`
  }

  if (p_score >= 5) {
    setTimeout(() => {
      alert(result.textContent = `You win::  You ${p_score} Computer ${c_score} `);
      location.reload();
    }, 0)
    return
  } else if (c_score >= 5) {
      setTimeout(() => {
      alert(result.textContent = `You lost::  Computer ${c_score} You ${p_score} `);
      location.reload();    
    }, 0)
    return
  }
}


