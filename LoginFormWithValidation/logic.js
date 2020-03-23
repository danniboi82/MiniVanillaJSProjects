let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let passConfirm = document.getElementById('passwordConfirm');
let email = document.getElementById('email');

function showError(input, msg) {
    let formCtrl = input.parentElement;
    formCtrl.className = `form-control error`;
    let small = formCtrl.querySelector('small');
    small.innerText = msg;
}

function showSuccess(input) {
    let formCtrl = input.parentElement;
    formCtrl.className = `form-control success`;
}

function validInput(inputArr) {
    inputArr.forEach(input => {
        if (!input.value) {
            showError(input, `${input.id[0].toUpperCase() + input.id.slice(1)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

function inputLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} is at least ${min} length`);
    } else if (input.value.length > max) {
        showError(input, `${input.id} is at most ${max} length`);
    } else {
        showSuccess(input);
    }
}

function validEmail(input) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(input.value)) {
        showError(input, `Please enter valid email`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input, input1) {
    if (input.value !== input1.value) {
        showError(input1, `Passwords do not match!`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validInput([username, email, password, passConfirm]);
    inputLength(username, 3, 25);
    inputLength(password, 8, 25);
    checkPasswordsMatch(password, passConfirm);
    validEmail(email);
})
//check/validate inputs 
//check length of password and username 
//email validation function
//check if passwords match