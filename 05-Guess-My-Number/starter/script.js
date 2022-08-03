'use strict';
function displayMessage(str) {
  document.querySelector('.message').textContent = str;
}

function guessNumber() {
  if (endFlag) {
    return false;
  }
  const guess = Number(document.querySelector('.guess').value);
  //input type帮我们规避了输入非数字的可能性
  console.log(guess);
  if (guess <= 0 || guess > 20)
    //'' will be converted to zero
    // boundary check
    displayMessage('⛔ Not a valid number');
  else {
    if (guess === theNum) {
      //correct answer
      displayMessage('🎉 Correct answer!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = theNum;
      // css properties must be in string
      if (highscore < score) highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      endFlag = true;
    } else {
      score--;
      displayMessage(guess > theNum ? '🔽 Too high!!' : '🔼 Too low!!');
      document.querySelector('.score').textContent = score;

      if (score === 0) {
        displayMessage('😭 You lost the game!!');
        endFlag = true;
      }
    }
  }
  document.querySelector('.guess').value = NaN;
}

function restartGame() {
  console.log('1');
  theNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  endFlag = false;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('');
  document.querySelector('.guess').value = NaN;
}

let theNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let endFlag = false;

document.querySelector('.check').addEventListener('click', guessNumber);

document.querySelector('.again').addEventListener('click', restartGame);

// keyboard control: check, or reset the game
document.onkeydown = function (event) {
  if (event.key == 'Enter') {
    guessNumber();
  } else if (event.ctrlKey && event.key === 'r') {
    event.preventDefault();
    restartGame();
  }
};

//由于JS处理的操作逻辑通常都是过程性的，因此使用lambda语句的机会远比定义函数的机会多
//多使用lambda
