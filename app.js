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

function play() {
    //Rock beats Scissors:
  //Scissors beat Paper
  //Paper beats Rock
    let player_score = 0;
  let computer_score = 0;
  let player_wins = 0;
  for(i=0; i<5; i++)
  {

    let player = playerChoice();
    let computer = computerChoice();
    if(player_score === 3 || computer_score === 3)
    {  
       if (player_score > computer_score)
      {
        console.log("So Human won ", player_score);
      }
      else{
        console.log("So Computer won ", computer_score);
        }
      break;
    }
    console.log("Starting round " + (i+1));

     if(player === computer){
      console.log("it's a tie")
    }
    else if(player == 'rock' && computer == 'scissor'){
      player_score +=1;
      console.log("you win Rock beats Scissor")
    }
    else if(player == 'scissor' && computer == 'paper'){
      player_score +=1;
      console.log("you win Scissor beats paper")
    }
    else if(player == 'paper' && computer == 'rock'){
       player_score +=1;
       console.log("you win Rock beats Scissor")
    }
    else if(computer == 'rock' && player == 'scissor'){
      computer_score +=1;
      console.log("you lost Rock beats Scissor")
    }
    else if(computer == 'scissor' && player == 'paper'){
      computer_score +=1;
      console.log("you lost Scissor beats paper")
    }
    else if(computer == 'paper' && player == 'rock'){
       computer_score +=1;
       console.log("you lost Rock beats Scissor")
    }
    else {
      console.log("invalid input");
    }
   console.log("Ending round " + (i+1));
  }
  
console.log("The score is " + player_score + " For the Human And "  + computer_score + " For the computer");
  if (player_score === computer_score){
    console.log("So The match is a draw ", player_score, computer_score);
  }
  else if (player_score > computer_score){
    console.log("So Human won ", player_score);
  }
  else{
    console.log("So Computer won ", computer_score);
  }
}
play()
