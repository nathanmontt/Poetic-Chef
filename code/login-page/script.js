'use strict'
/* DECLARING VARIABLES */
//TOGGLE VISIBILITY
const togglePassword = document.querySelector('#btn-visibility');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

// btnChange.addEventListener('click', function () {
//   hideLoginPage.classList.add('hidden');
//   changeTitlePage.innerText = 'Made in Red | Sign Up';
// });

// btnBackChange.addEventListener('click', function () {
//   hideLoginPage.classList.remove('hidden');
//   changeTitlePage.innerText = 'Made in Red | Login';
// });