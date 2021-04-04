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

var requiredFields = function() {
  if (document.querySelector('input[required]')) {
    return true;
  }
  else {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Missing required';
    newError.style.color = 'red';
  }
}
requiredFields();

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

var validateAll = function(){
  if (foundForm() == true && amountInputs() == true && requiredFields() == true && foundLabel1() == true && foundLabel2() == true && foundLabel3() == true && foundLabel4() == true && foundSubmitButton() == true) {
    var newError = validations.appendChild(document.createElement('div'));
    newError.textContent = 'Every validation has passed';
    newError.style.color = 'green';
  }
}
validateAll();