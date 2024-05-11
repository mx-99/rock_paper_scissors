function getComputerChoice(){
let choices = ['rock', 'paper', 'scissor'];
randomIndex = Math.floor(Math.random()* choices.length);
return choices[randomIndex];
}
console.log(getComputerChoice());
