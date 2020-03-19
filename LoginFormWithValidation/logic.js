let form = document.querySelector('#form');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passConfirm = document.querySelector('#passwordConfirm');


//Email Validation
function validEmail(input) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(input).toLowerCase());

}

//Show input error message
function showError(input, msg) {
    //input here referring to value/text inputted per different selector
    //If input was in username then username.parentelement would be the case
    //it would point to PARENT element of where ever the input element was entered 
    const formCtrl = input.parentElement;
    formCtrl.className = 'form-control error';
    const small = formCtrl.querySelector('small');
    small.innerText = msg;
}

function showSuccess(input) {
    const formCtrl = input.parentElement;
    formCtrl.className = 'form-control success';
}

//Check required inputs
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        console.log(input.id);
        if (!input.value.trim()) {
            showError(input, `${firstCharCap(input)} is required`);
        } else {
            showSuccess(input);
        }
        // if(input.id === username)
    })
}

function firstCharCap (input) {
    if(input.id === "passwordConfirm") {
        return `${input.id.charAt(0).toUpperCase() + input.id.slice(1,8)} ${input.id.slice(8)}`;
    }
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//eventListeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (!userName.value) {
    //     showError(userName, "ENTER A FUCKING USERNAME!")
    // } else {
    //     showSuccess(userName);
    // }

    // if (!email.value) {
    //     showError(email, "Email is required");
    // } else if (!validEmail(email)) {
    //     showError(email, "Enter valid e-mail");
    // } else {
    //     showSuccess(email);
    // }
    checkRequired([userName, email, password, passConfirm]);
});