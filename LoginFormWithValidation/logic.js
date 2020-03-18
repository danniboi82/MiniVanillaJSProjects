let form = document.querySelector('#form');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passConfirm = document.querySelector('#passwordConfirm');

//Show input error message
function showError(input, msg) {
    const formCtrl = input.parentElement; 
    formCtrl.className = 'form-control error';
    const small = formCtrl.querySelector('small');
    small.innerText = msg;
}




//eventListeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!userName.value) {
        showError(userName, "ENTER A FUCKING USERNAME!")
    } else {
        showSuccess(userName);
    }
});