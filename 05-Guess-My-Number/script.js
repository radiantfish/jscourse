'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 1) when there is nop input
  if (!guess) {
    displayMessage('No number! :(');

    // 2) When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // manipulating css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Maniulating highscore value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 3) When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    } else {
      displayMessage('You lost the game! Try again next time!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Restarting the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  console.log(secretNumber);

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;

  // manipulating css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
