function computerChoice(){
  const rps = ['rock', 'paper', 'scissor'];
  const rps_index = Math.floor(Math.random() * rps.length);
  const rps_random = rps[rps_index];
  return rps_random;
}

function playerChoice(){
  let userInput = prompt("Enter Rock, Paper or Scissor to play agianst a computer");
  return userInput.toLowerCase().trim();
}
