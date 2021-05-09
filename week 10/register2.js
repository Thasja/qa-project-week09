var email = document.querySelector('#register-email-input');
var emailError = document.querySelector('#emailError');
var nameError = document.querySelector('#nameError');
var fullName = document.querySelector('#register-fullName-input');
var password = document.querySelector('#register-password-input');
var passError = document.querySelector('#passwordError');
var passConfirm = document.querySelector('#register-confirm-password-input');
var passConfirmError = document.querySelector('#passConfirmError');
var validations = document.getElementById('validations');
var button = document.querySelector('.submit-button');

var emailFormat = function(){
    var at = new RegExp("@");
    if (at.test(email.value)) {
        return true;
    }
    else {
        emailError.textContent = 'You need to enter a valid Email address.';
        emailError.style.color = 'red';
    }
}

email.addEventListener('blur', emailFormat);

email.addEventListener('focus', function() {
    emailError.textContent = '';
});

email.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
email.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);


var nameFormat = function(){
    var space = new RegExp(" ");
    if (space.test(fullName.value.trim()) && fullName.value.length > 6) {
        return true;
    }
    else {
        nameError.textContent = 'Not a valid full name. It should have at least 6 characters and 1 space in between.';
        nameError.style.color = 'red';
    }
}

fullName.addEventListener('blur', nameFormat);

fullName.addEventListener('focus', function(e) {
   nameError.textContent = '';
});

fullName.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
fullName.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);

var passwordFormat = function(){
    var correctPass = /^[0-9a-zA-Z]+$/;
    if (password.value.match(correctPass) && password.value.length >= 8) {
        return true;
    }
    else {
        passError.textContent = 'Incorrect password. A password should have at least 8 characters and only numbers and letters.';
        passError.style.color = 'red';
    }
}

password.addEventListener('blur', passwordFormat);

password.addEventListener('focus', function(e) {
   passError.textContent = '';
});

password.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
password.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);

var passConfirmFormat = function(){
    if (passConfirm.value == password.value) {
        return true;
    }
    else {
        passConfirmError.textContent = 'Does not match with password field.';
        passConfirmError.style.color = 'red';
    }
}

passConfirm.addEventListener('blur', passConfirmFormat);

passConfirm.addEventListener('focus', function(e) {
   passConfirmError.textContent = '';
});

passConfirm.addEventListener('focus', function(e){
    e.target.style.background = 'pink';
}, true);
passConfirm.addEventListener('blur', function(e){
    e.target.style.background = '';
}, true);

button.onclick = function(e) {
    e.preventDefault();
    handleRegister();
    if (emailFormat() == true && nameFormat() == true && passwordFormat() == true && passConfirmFormat() == true){
        fetch('https://jsonplaceholder.typicode.com/users?email=' + email.value)
        .then (response => response.json())
        .then (data => console.log(data));
        var newError = validations.appendChild(document.createElement('div'));
        var newError2 = validations.appendChild(document.createElement('div'));
        var newError3 = validations.appendChild(document.createElement('div'));
        var newError4 = validations.appendChild(document.createElement('div'));
        newError.textContent = 'Email address: ' + email.value;
        newError2.textContent = 'Full name: ' + fullName.value;
        newError3.textContent = 'Password: ' + password.value;
        newError4.textContent = 'Confirm Password: ' + passConfirm.value;
        newError.style.color = 'blue';
        newError2.style.color = 'blue';
        newError3.style.color = 'blue';
        newError4.style.color = 'blue';
    }
}

var handleRegister = function(){
    var data = {
        fullName: fullName.value,
        email: email.value,
        password: password.value
    }
    if (emailFormat() == true && nameFormat() == true && passwordFormat() == true && passConfirmFormat() == true){
        fetch('http://localhost:4000/register', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }  
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
    }
}