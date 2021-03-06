//var validations = document.getElementById('validations');
var validations2 = document.getElementById('items');

var foundForm = function() {
    if (document.getElementById('loginForm')) {
        return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Form is not found';
        newError.style.color = 'red';
    }
}
foundForm();

var amountInputs = function() {
    var inputs = document.querySelectorAll('input');
    if (inputs.length == 2) {
        return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'There are missing inputs';
        newError.style.color = 'red';
    }
}
amountInputs();

var requiredFields1 = function() {
var required1 = document.getElementById('loginEmailInput');
    if (required1.hasAttribute('required')) {
      return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Missing required';
        newError.style.color = 'red';
    }
}
requiredFields1();

var requiredFields2 = function() {
    var required2 = document.getElementById('login-password-input');
    if (required2.hasAttribute('required')) {
      return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Missing required';
        newError.style.color = 'red';
    }
}
requiredFields2();

var foundLabel1 = function() {
    if (document.querySelector('.label1')) {
      return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Missing label';
        newError.style.color = 'red';
    }
}
foundLabel1();

var foundLabel2 = function() {
    if (document.querySelector('.label2')) {
      return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Missing label';
        newError.style.color = 'red';
    }
}
foundLabel2();

var foundLoginButton = function() {
    if (document.querySelector('.login-button')) {
        return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Missing login button';
        newError.style.color = 'red';
    }
}
foundLoginButton();

var contentButton = function() {
    var loginButton = document.querySelector('.login-button').textContent;
    if (loginButton == 'Log in'){
        return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Incorrect content Log in button';
        newError.style.color = 'red';
    }
}
contentButton();

var correctLink = function(){
    var link = document.querySelector('a');
    if (link.getAttribute('href') == 'register.html'){
        return true;
    }
    else {
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Incorrect link';
        newError.style.color = 'red';
    }
}
correctLink();

function validateAll() {
    if ((foundForm() == true) && (amountInputs() == true) && (requiredFields1() == true) && (requiredFields2() == true) && (foundLabel1() == true) && (foundLabel2() == true) && (foundLoginButton() == true) && (contentButton() == true) && (correctLink() == true)){
        var newError = validations2.appendChild(document.createElement('li'));
        newError.textContent = 'Every validation has passed';
        newError.style.color = 'green';
    }
}
validateAll();
