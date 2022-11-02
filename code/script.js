'use strict'

//VARIABLES
const btnOpenMenu = document.querySelector('.hamb-menu');
const optionsMenu = document.querySelectorAll('.options');

for (let i=0 ; i<optionsMenu.length ; i++) {
  btnOpenMenu.addEventListener('click', function () {
    optionsMenu[i].classList.toggle('hidden');
  });
}


//RESIZE ON WINDOWN
// window.addEventListener('resize', function () {
//   if (window.innerWidth >= 700) {
//     teste.style.background = "#62ff01"
//   } else {
//     teste.style.background = "black"
//   }
// });