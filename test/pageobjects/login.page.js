const Page = require('./page');

class loginPage extends Page {

    get emailField() {return $('#loginEmailInput')}
    get emailErrorMessage() {return $('#emailError')}
    get passwordField() {return $('#login-password-input')}
    get passwordErrorMessage() {return $('#passwordError')}
    get loginButton() {return $('.login-button')}
    get registerFormLink() {return $('.link > span > a')}
    get validationResults() {return $('#items')}
    get validationResultsEmail() {return $('#items > li:nth-child(2)')}
    get validationResultsPassword() {return $('#items > li:nth-child(3)')}

    open() {
        super.open('login.html')
    }

    submit() {
        this.submitBtn.click()
    }

}

module.exports = new loginPage();


