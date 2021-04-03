var validations = document.getElementById('validations');
var errorMessage = ' '

var foundForm = function() {
    if (document.getElementById('registerForm')) {
        return true;
    }
    else {
        validations.textContent = 'form is not found';
        validations.style.color = 'red';
    }
}
foundForm();

var amountInputs = function() {
    var inputs = document.querySelectorAll('input');
    if (inputs.length == 2) {
        return true;
    }
    else {
        validations.textContent = 'There are missing inputs';
        validations.style.color = 'red';
    }
}
amountInputs();

var requiredFields = function() {
    if (document.querySelector('input[required]')) {
      return true;
    }
    else {
      validations.textContent = 'missing required';
      validations.style.color = 'red';
    }
  }
  requiredFields()

  var foundLabel1 = function() {
    if (document.querySelector('.label1')) {
      return true;
    }
    else {
      validations.textContent = 'missing label';
      validations.style.color = 'red';
    }
  }
  foundLabel1();
  
  var foundLabel2 = function() {
    if (document.querySelector('.label2')) {
      return true;
    }
    else {
      validations.textContent = 'missing label';
      validations.style.color = 'red';
    }
  }
  foundLabel2();

var foundLoginButton = function() {
    if (document.querySelector('.login-button')) {
        return true;
    }
    else {
      validations.textContent = 'missing login button';
      validations.style.color = 'red';
    }
}
foundLoginButton();

var correctLink = function(){
    var link = document.querySelector('a');
    if (link.getAttribute('href') == 'register.html'){
        return true;
    }
    else {
        validations.textContent = 'incorrect link';
        validations.style.color = 'red';
    }
}
correctLink();



var validateAll = function (){
    if (foundForm() == true && amountInputs() == true && requiredFields() && foundLabel1() == true && foundLabel2() == true && foundLoginButton() == true && correctLink() == true){
      validations.textContent =  'All validations have passed';
    }
    else {
      validations.textcontent = errorMessage;
    }
  }
  validateAll();