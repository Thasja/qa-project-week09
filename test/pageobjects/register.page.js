const Page = require('./page');

class registerPage extends Page {

    get emailField() {return $('#register-email-input')}
    get emailErrorMessage() {return $('#emailError')}
    get fullNameField() {return $('#register-fullName-input')}
    get fullNameErrorMessage() {return $('#nameError')}
    get passwordField() {return $('#register-password-input')}
    get passwordErrorMessage() {return $('#passwordError')}
    get confirmPasswordfield() {return $('#register-confirm-password-input')}
    get confirmPasswordErrorMessage() {return $('#passConfirmError')}
    get submitButton() {return $('.submit-button')}
    get loginFormLink() {return $('.link > span > a')}
    get validationResults() {return $('#validations > div')}
    get validationResultsEmail() {return $('#validations > div:nth-child(2)')}
    get validatonResultsFullName() {return $('#validations > div:nth-child(3)')}
    get validationResultsPassword() {return $('#validations > div:nth-child(4)')}
    get validationResultsConfirmPassword() {return $('#validations > div:nth-child(5)')}

    open() {
        super.open('register.html')
    }

    submit() {
        this.submitBtn.click()
    }

}

module.exports = new registerPage();
