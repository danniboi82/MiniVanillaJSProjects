let form = document.querySelector('#form');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passConfirm = document.querySelector('#passwordConfirm');


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

//takes in the input and makes input's parentelement className form-control success from just form control
function showSuccess(input) {
    const formCtrl = input.parentElement;
    formCtrl.className = 'form-control success';
}

//Email Validation
function validEmail(input) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(input.value.trim()).toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, 'Not a valid email');
    }

}


//Check required inputs
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        console.log(input.id);
        if (!input.value || input.value.trim() === '') {
            console.log("am I working??")
            showError(input, `${firstCharCap(input)} is required`);
        } else {
            showSuccess(input);
        }
        // if(input.id === username)
    });
}

function firstCharCap(input) {
    if (input.id === "passwordConfirm") {
        return `${input.id.charAt(0).toUpperCase() + input.id.slice(1,8)} ${input.id.slice(8)}`;
    }
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    console.log(input.id, input.value, input.value.length);
    if (input.value.length < min) {
        showError(input, `${firstCharCap(input)} minimum ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${firstCharCap(input)} maximum ${max} characters`)
    } else {
        showSuccess(input);
    }
}


function checkPass(input, input1) {
    if (input.value !== input1.value) {
        showError(input1, `Make sure passwords match`);
    } 
    // else {
    //     showSuccess(input);
    // }
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
    checkLength(userName, 3, 50);
    checkLength(password, 8, 50);
    validEmail(email);
    checkPass(password, passConfirm);
});