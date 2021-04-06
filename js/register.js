var validations = document.getElementById('validations');

var foundForm = function() {
  if (document.getElementById('registerForm')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'form is not found';
    newError.style.color = 'red';
  }
}
foundForm();

var amountInputs = function() {
  var inputs = document.querySelectorAll('input');
  if (inputs.length == 4) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'There are missing inputs';
    newError.style.color = 'red';
  }
}
amountInputs();

var requiredFields1 = function() {
  var required1 = document.getElementById('register-email-input');
  if (required1.hasAttribute('required')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('li'));
    newError.textContent = 'Missing required';
    newError.style.color = 'red';
  }
}
requiredFields1();
  
var requiredFields2 = function() {
  var required2 = document.getElementById('register-fullName-input');
  if (required2.hasAttribute('required')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('li'));
    newError.textContent = 'Missing required';
    newError.style.color = 'red';
  }
}
requiredFields2();

var requiredFields3 = function() {
  var required2 = document.getElementById('register-password-input');
  if (required2.hasAttribute('required')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('li'));
    newError.textContent = 'Missing required';
    newError.style.color = 'red';
  }
}
requiredFields3();

var requiredFields4 = function() {
  var required2 = document.getElementById('register-confirm-password-input');
  if (required2.hasAttribute('required')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('li'));
    newError.textContent = 'Missing required';
    newError.style.color = 'red';
  }
}
requiredFields4();




var foundLabel1 = function() {
  if (document.querySelector('.label1')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
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
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Missing label';
    newError.style.color = 'red';
  }
}
foundLabel2();

var foundLabel3 = function() {
  if (document.querySelector('.label3')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Missing label';
    newError.style.color = 'red';
  }
}
foundLabel3();

var foundLabel4 = function() {
  if (document.querySelector('.label4')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Missing label';
    newError.style.color = 'red';
  }
}
foundLabel4();

var foundSubmitButton = function() {
  if (document.querySelector('.submit-button')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Missing submit button';
    newError.style.color = 'red';
  }
}
foundSubmitButton();

var contentResetButton = function() {
  var resetButton = document.querySelector('.reset-button').textContent;
  if (resetButton == 'Reset'){
      return true;
  }
  else {
      var newError = validations.appendChild(document.createElement('li'));
      newError.textContent = 'Incorrect content Reset button';
      newError.style.color = 'red';
  }
}
contentResetButton();

var contentSubmitButton = function() {
  var submitButton = document.querySelector('.submit-button').textContent;
  if (submitButton == 'Submit'){
      return true;
  }
  else {
      var newError = validations.appendChild(document.createElement('li'));
      newError.textContent = 'Incorrect content Submit button';
      newError.style.color = 'red';
  }
}
contentSubmitButton();

var validateAll = function(){
  if (foundForm() == true && amountInputs() == true && requiredFields1() == true && requiredFields2() == true && requiredFields3() == true && requiredFields4() == true && foundLabel1() == true && foundLabel2() == true && foundLabel3() == true && foundLabel4() == true && foundSubmitButton() == true && contentResetButton() == true && contentSubmitButton() == true) {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Every validation has passed';
    newError.style.color = 'green';
  }
}
validateAll();