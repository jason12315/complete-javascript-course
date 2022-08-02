'use strict';
function guessNumber() {
  if (endFlag) {
    return false;
  }

  const guess = Number(document.querySelector('.guess').value);
  //input type帮我们规避了输入非数字的可能性
  console.log(guess);
  if (guess <= 0 || guess > 20)
    //'' will be converted to zero
    document.querySelector('.message').textContent = '⛔ Not a valid number';
  else {
    if (guess === theNum) {
      document.querySelector('.message').innerHTML =
        '🎉 Correct answer!<br \\>Press Ctrl + R to restart';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = theNum;
      // css properties are always in string type
      if (highscore < score) highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      endFlag = true;
    } else {
      if (guess > theNum) {
        document.querySelector('.message').textContent = '🔽 Too high!!';
      } else {
        document.querySelector('.message').textContent = '🔼 Too low!!';
      }
      score--;
      document.querySelector('.score').textContent = score;

      if (score === 0) {
        document.querySelector('.message').innerHTML =
          '😭 You lose the game!!<br \\>Press Ctrl + R to restart';
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
  document.querySelector('.message').textContent = 'Start guessing...';
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
