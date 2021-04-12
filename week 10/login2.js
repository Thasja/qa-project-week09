var email = document.querySelector('#login-email-input');
var password = document.querySelector('#login-password-input');
var emailError = document.querySelector('#emailError');
var passError = document.querySelector('#passwordError');
var validations2 = document.getElementById('items');
var button = document.querySelector('.login-button');


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

password.addEventListener('focus', function() {
    passError.textContent = '';
});

password.addEventListener('focus', function(e) {
    e.target.style.background = 'pink';
}, true);
password.addEventListener('blur', function(e) {
    e.target.style.background = '';
}, true);

button.onclick = function(e) {
    e.preventDefault();
    if (emailFormat() == true && passwordFormat() == true){
        fetch('https://jsonplaceholder.typicode.com/users?email=' + email.value)
        .then (response => response.json())
        .then (data => console.log(data));
        var newError = validations2.appendChild(document.createElement('li'));
        var newError2 = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Email adress: ' + email.value;
        newError2.textContent = 'Password: ' + password.value;
        newError.style.color = 'blue';
        newError2.style.color = 'blue';
    }
}