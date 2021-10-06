'use strict';

const topLimit = 20;
const bottomLimit = 1;

let randNumber = Math.trunc(Math.random() * topLimit) + bottomLimit;

let score = 20;
let highScore = 0;

// Event of check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  let newMessage = '';

  // When the player dose not enter input
  if (!guess) {
    newMessage = '⛔ No Number!';
  }
  // When th player enter number out of the range
  else if (guess > topLimit || guess < bottomLimit) {
    newMessage = '⛔ Out of range';
  }
  // When the player wins
  else if (guess === randNumber) {
    newMessage = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#00C614';
    document.querySelector('.number').textContent = randNumber;
    document.querySelector('.number').style.width = '30rem';

    // Update the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // while the score is not 0.
  // The player still can play
  else if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;

    // When the player enters lower guess
    if (guess < randNumber) {
      newMessage = '📉 Too lower';
    }
    // When the player enters higher guess
    else if (guess > randNumber) {
      newMessage = '📈 Too high';
    }
  } // When the score is 0 - the game over
  else {
    newMessage = '😞 You lost the game';
    document.querySelector('.score').textContent = 0;
  }

  document.querySelector('.message').textContent = newMessage;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randNumber = Math.trunc(Math.random() * topLimit) + bottomLimit;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
