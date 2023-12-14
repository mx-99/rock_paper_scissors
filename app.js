function computerChoice(){
  const rps = ['rock', 'paper', 'scissor'];
  const rps_index = Math.floor(Math.random() * rps.length);
  const rps_random = rps[rps_index];
  return console.log(rps_random);
}
computerChoice();
