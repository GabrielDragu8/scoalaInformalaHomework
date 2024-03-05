function play() {
  const options = ['rock', 'paper', 'scissors'];
  const pickComputerMove = options[Math.floor(Math.random() * 3)];
  const pickUserMove = options[Math.floor(Math.random() * 3)];
  
  console.log(`Computer choice: "${pickComputerMove}"`);
  console.log(`User choice: "${pickUserMove}"`);

  if (pickComputerMove === pickUserMove) {
    console.log('It is a tie!');
  } else if (
    (pickUserMove === 'rock' && pickComputerMove === 'scissors') ||
    (pickUserMove === 'paper' && pickComputerMove === 'rock') ||
    (pickUserMove === 'scissors' && pickComputerMove === 'paper')
  ) {
    console.log('User wins!');
  } else {
    console.log('Computer wins!');
  }
}

play();
