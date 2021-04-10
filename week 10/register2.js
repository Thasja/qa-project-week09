var email = document.querySelector('#register-email-input');
var emailError = document.querySelector('#emailError');
var nameError = document.querySelector('#nameError');
var fullName = document.querySelector('#register-fullName-input');
var password = document.querySelector('#register-password-input');
var passError = document.querySelector('#passwordError');
var passConfirm = document.querySelector('#register-confirm-password-input');
var passConfirmError = document.querySelector('#passConfirmError');

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

fullName.addEventListener('blur', function(e) {
    var space = new RegExp(" ");
    if (space.test(e.target.value.trim()) && fullName.value.length > 6) {
        return true;
    }
    else {
        nameError.textContent = 'Not a valid full name. It should have at least 6 characters and 1 space in between.';
        nameError.style.color = 'red';
    }
});

fullName.addEventListener('focus', function(e) {
   nameError.textContent = '';
});

fullName.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
fullName.addEventListener('blur', function(e){
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

password.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
password.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);

passConfirm.addEventListener('blur', function(e) {
    if (e.target.value == password.value) {
        return true;
    }
    else {
        passConfirmError.textContent = 'Does not match with password field.';
        passConfirmError.style.color = 'red';
    }
});

passConfirm.addEventListener('focus', function(e) {
   passConfirmError.textContent = '';
});

passConfirm.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
passConfirm.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);