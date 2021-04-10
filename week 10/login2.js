var email = document.querySelector('#login-email-input');
var password = document.querySelector('#login-password-input');
var emailError = document.querySelector('#emailError');
var passError = document.querySelector('#passwordError');

email.addEventListener('blur', function(e) {
    var at = new RegExp("@");
    if (at.test(e.target.value)) {
        return true;
    }
    else {
        emailError.textContent = 'You need to enter a valid Emailaddress.';
        emailError.style.color = 'red';
    }
});

email.addEventListener('focus', function(e) {
    emailError.textContent = '';
});

email.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
email.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);

password.addEventListener('blur', function(e) {
    var correctPass = /^[0-9a-zA-Z]+$/;
    if (e.target.value.match(correctPass) && password.value.length >= 8) {
        return true;
    }
    else {
        passError.textContent = 'Incorrect password. A password should have at least 8 characters and only numbers and letters.';
        passError.style.color = 'red';
    }
});

password.addEventListener('focus', function(e) {
    passError.textContent = '';
});

password.addEventListener('focus', function(e) {
    e.target.style.background = 'pink';
}, true);
password.addEventListener('blur', function(e) {
    e.target.style.background = '';
}, true);