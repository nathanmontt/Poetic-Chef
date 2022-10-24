'use strict'

const btnOpenMenu = document.querySelector('.hamb-nav');
const optionsMenu = document.querySelectorAll('.options');

for (let i=0 ; i<optionsMenu.length ; i++) {
  btnOpenMenu.addEventListener('click', function () {
    optionsMenu[i].classList.toggle('hidden');
  });
}