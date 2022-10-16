'use strict'
/* DECLARING VARIABLES */
const clickOpenMenu = document.querySelector('.hamb-menu');
const optionsNavbar = document.querySelectorAll('.options');
const styleOptionsNavbar = document.querySelector('.nav-options');

for (let i = 0; i < optionsNavbar.length; i++) {
  clickOpenMenu.addEventListener('click', function () {
    optionsNavbar[i].classList.toggle('hidden');

    /* EDITING THE MENU */
    styleOptionsNavbar.style.marginTop = '.7rem';
    styleOptionsNavbar.style.backgroundColor = 'white';
  });
}

/* CLOSING HAMB. MENU WITH esc */
for (let j = 0; j < optionsNavbar.length; j++) {
  document.addEventListener('keydown', function (eventKeyboard) {
    if (eventKeyboard.key === 'Escape' && !optionsNavbar[j].classList.contains('hidden')) {
      optionsNavbar[j].classList.add('hidden');
    }
  });
}