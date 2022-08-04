'use strict';

//Get Elements
const scoreEl = document.querySelectorAll('.score');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const curScoreEl = document.querySelectorAll('.current-score');
const playerWd = document.querySelectorAll('.player');
let playing = true;
//Initialization
let curScore = [0, 0];
let score = [0, 0];
let round = 0;

const init = function () {
  dice.classList.add('hidden');
  for (let i = 0; i < 2; ++i) {
    curScoreEl[i].textContent = 0;
    scoreEl[i].textContent = 0;
  }
  curScore = [0, 0];
  score = [0, 0];
};
init();

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (!playing) return;
  if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
  const number = Math.floor(Math.random() * 6) + 1;
  //Show dice
  console.log(number);
  dice.setAttribute('src', `dice-${number}.png`);
  //Calculate scores
  if (number === 1) {
    curScore[round] = 0;
    curScoreEl[round].textContent = curScore[round];
    switchPlayer();
  } else {
    curScore[round] += number;
    curScoreEl[round].textContent = curScore[round];
  }
});

//Holding dice functionality
btnHold.addEventListener('click', function () {
  if (!playing) return;
  score[round] += curScore[round];
  scoreEl[round].textContent = score[round];
  curScore[round] = 0;
  curScoreEl[round].textContent = curScore[round];
  if (score[round] >= 100) {
    playerWd[round].classList.add('player--winner');
    dice.classList.add('hidden');
    playing = false;
  } else {
    switchPlayer();
  }
});

//Reset Game funcionality;
btnNew.addEventListener('click', () => {
  init();
  playerWd[round].classList.remove('player--winner');
  playerWd[0].classList.add('player--active');
  playerWd[1].classList.remove('player--active');
  playing = true;
  dice.classList.remove('hidden');
  round = 0;
});

//Switch Player Functionality

function switchPlayer() {
  round = round === 0 ? 1 : 0;
  //
  playerWd[0].classList.toggle('player--active');
  playerWd[1].classList.toggle('player--active');
}
