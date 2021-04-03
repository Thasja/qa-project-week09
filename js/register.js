var validations = document.getElementById('validations');
var errorMessage = ' '

var foundForm = function() {
  if (document.getElementById('registerForm')) {
    return true;
  }
  else {
    validations.textContent = 'form is not found';
  }
}
foundForm();

var amountInputs = function () {
  var inputs = document.querySelectorAll('input');
  if (inputs.length == 4) {
    return true;
  }
  else {
    validations.textContent = 'There are missing inputs';
  }
}
amountInputs()

var requiredFields = function () {
  if (document.querySelector('input[required]')) {
    return true;
  }
  else {
    validations.textContent = 'missing required';
  }
}
requiredFields()

var foundLabel1 = function () {
  if (document.querySelector('.label1')) {
    return true;
  }
  else {
    validations.textContent = 'missing label';
  }
}
foundLabel1()

var foundLabel2 = function () {
  if (document.querySelector('.label2')) {
    return true;
  }
  else {
    validations.textContent = 'missing label';
  }
}
foundLabel2()

var foundLabel3 = function () {
  if (document.querySelector('.label3')) {
    return true;
  }
  else {
    validations.textContent = 'missing label';
  }
}
foundLabel3()

var foundLabel4 = function () {
  if (document.querySelector('.label4')) {
    return true;
  }
  else {
    validations.textContent = 'missing label';
  }
}
foundLabel4()

var foundButton = function () {
  if (document.querySelector('.submit-button')) {
    return true;
  }
  else {
    validations.textContent = 'missing submit button';
  }
}
foundButton()

var validateAll = function (){
  if (foundForm() == true && amountInputs() == true && requiredFields() && foundLabel1() == true && foundLabel2() == true && foundLabel3() == true && foundLabel4() == true && foundButton() == true) {
    validations.textContent =  'All validations have passed';
  }
  else {
    validations.textcontent = errorMessage;
  }
}
validateAll();