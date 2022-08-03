'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function showTheModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeTheModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnShowModal.length; ++i) {
  btnShowModal[i].addEventListener('click', showTheModal);
}

btnCloseModal.addEventListener('click', closeTheModal);
overlay.addEventListener('click', closeTheModal);

document.addEventListener('keydown', event => {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeTheModal();
  }
});
//打开和关闭的操作通常是需要多次重复执行的，所以尽量对此类函数实名化
