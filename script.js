'use strict';

const loginButton = document.querySelector('.login a');
const signupButton = document.querySelector('.signup a');
const signupContent = document.querySelector('#signup');
const loginContent = document.querySelector('#login');

loginButton.onclick = ()=> {

signupContent.style.display = "none";
loginContent.style.display = "block";
loginButton.classList.add('active');
signupButton.classList.remove('active');
}

signupButton.onclick = ()=> {

    loginContent.style.display = "none";
    signupContent.style.display = "block";
    signupButton.classList.add('active');
    loginButton.classList.remove('active');
    }