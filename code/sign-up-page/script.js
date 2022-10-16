'use strict'
/* ---------- DECLARING VARIABLES ---------- */

const bodyPage = document.querySelector('body');

const togglePasswordFirst = document.querySelector('#btn-visibility-1');
const togglePasswordSecond = document.querySelector('#btn-visibility-2');

/* VISIBILITY TEST ON PASSWORDS */
const firstPassword = document.getElementById('password-1');
const secondPassword = document.getElementById('confirm-password');

/* NEXT STEP TO THE SIGN UP */
const nextPage = document.getElementById('btn-next-step');
const hidePreviousPage = document.querySelector('.container-general-sign-up');
const showNextPagePart = document.querySelector('.container-general-sign-up-2');
const changeNumberPageSteps = document.querySelector('.steps');

/* ---------- CREATING FUNCTIONS ---------- */

// TRANSFORMING ASTERISTIKS IN TEXT - 1st PASSWORD
togglePasswordFirst.addEventListener('click', function () {
  if (firstPassword.type === "password") {
    firstPassword.type = "text";
  } else {
    firstPassword.type = "password";
  }
});

// TRANSFORMING ASTERISTIKS IN TEXT - 2st PASSWORD
togglePasswordSecond.addEventListener('click', function () {
  if (secondPassword.type === "password") {
    secondPassword.type = "text";
  } else {
    secondPassword.type = "password";
  }
});

// TRANSTITION TO THE NEXT STEP OF THE SIGN UP
// nextPage.addEventListener('click', function () {
//   // bodyPage.style.transform = "translateY(100%)";
//   changeNumberPageSteps.textContent = "Etapa 2 de 2"

//   hidePreviousPage.classList.add('hidden');
//   showNextPagePart.classList.remove('hidden');
// });