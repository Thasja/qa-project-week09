const registerPage = require('../pageobjects/register.page.js');

describe('Tests register page Email address field', () => {

    beforeAll('open browser', () => {
        registerPage.open();
        browser.pause(1000);
    });

    it('Email error message should show when entering incorrect email format', () => {
        registerPage.emailField.setValue('test');
        browser.keys('Tab');
        expect(registerPage.emailErrorMessage).toHaveText('You need to enter a valid Email address.');
    });

    it('Email error message should show when entering nothing in email field', () => {
        registerPage.emailField.setValue('');
        browser.keys('Tab');
        expect(registerPage.emailErrorMessage).toHaveText('You need to enter a valid Email address.');
    });

    it('Email error message should show when entering only spaces in email field', () => {
        registerPage.emailField.setValue('      ');
        browser.keys('Tab');
        expect(registerPage.emailErrorMessage).toHaveText('You need to enter a valid Email address.');
    });

    it('Email error message should NOT show when entering correct email format', () => {
        registerPage.emailField.setValue('wietjiskeja@gmail.com');
        browser.keys('Tab');
        expect(registerPage.emailErrorMessage).toHaveText('');
    });
});

describe('Tests register page Full name field', () => {

    beforeAll('open browser', () => {
        registerPage.open();
        browser.pause(1000);
    });

    it('Full name error message should show when entering incorrect fullname format', () => {
        registerPage.fullNameField.setValue('test');
        browser.keys('Tab');
        expect(registerPage.fullNameErrorMessage).toHaveText('Not a valid full name. It should have at least 6 characters and 1 space in between.');
    });

    it('Full name error message should show when entering nothing in full name field', () => {
        registerPage.fullNameField.setValue('');
        browser.keys('Tab');
        expect(registerPage.fullNameErrorMessage).toHaveText('Not a valid full name. It should have at least 6 characters and 1 space in between.');
    });

    it('Full name error message should show when entering only spaces in full name field', () => {
        registerPage.fullNameField.setValue('      ');
        browser.keys('Tab');
        expect(registerPage.fullNameErrorMessage).toHaveText('Not a valid full name. It should have at least 6 characters and 1 space in between.');
    });

    it('Full name error message should NOT show when entering correct full name format', () => {
        registerPage.fullNameField.setValue('Test test');
        browser.keys('Tab');
        expect(registerPage.fullNameErrorMessage).toHaveText('');
    });
});

describe('Tests register page Password field', () => {

    beforeAll('open browser', () => {
        registerPage.open();
        browser.pause(1000);
    });

    it('Password error message should show when entering less than 8 characters in password field', () => {
        registerPage.passwordField.setValue('test');
        browser.keys('Tab');
        expect(registerPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should show when entering characters other than numbers and letters in password field', () => {
        registerPage.passwordField.setValue('test&"/(');
        browser.keys('Tab');
        expect(registerPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should show when entering only spaces in password field', () => {
        registerPage.passwordField.setValue('          ');
        browser.keys('Tab');
        expect(registerPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should show when entering nothing in password field', () => {
        registerPage.passwordField.setValue('');
        browser.keys('Tab');
        expect(registerPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should NOT show when entering a correct format in password field', () => {
        registerPage.passwordField.setValue('testtest789');
        browser.keys('Tab');
        expect(registerPage.passwordErrorMessage).toHaveText('');
    });
});

describe('Tests register page Confirm Password field', () => {

    beforeAll('open browser', () => {
        registerPage.open();
        browser.pause(1000);
    });

    it('Confirm Password error message should show when entering other value than the one entered in password field', () => {
        registerPage.passwordField.setValue('testtest');
        registerPage.confirmPasswordfield.setValue('test');
        browser.keys('Tab');
        expect(registerPage.confirmPasswordErrorMessage).toHaveText('Does not match with password field.');
    });

    it('Confirm Password error message should NOT show when entering the same value as the one entered in password field', () => {
        registerPage.passwordField.setValue('testtest');
        registerPage.confirmPasswordfield.setValue('testtest');
        browser.keys('Tab');
        expect(registerPage.confirmPasswordErrorMessage).toHaveText('');
    });
});

describe('Tests register page Validation results', () => {

    beforeAll('open browser', () => {
        registerPage.open();
        browser.pause(1000);
    });

    it('Validation results should only show Every validation has passed, when entering incorrect format for email, full name, password and confirm password field and clicking submit button', () => {
        registerPage.emailField.setValue('test');
        registerPage.fullNameField.setValue('test');
        registerPage.passwordField.setValue('test');
        registerPage.confirmPasswordfield.setValue('testtest');
        registerPage.submitButton.click();
        expect(registerPage.validationResults).toHaveText('Every validation has passed');
    });

    it('Validation results should show Email adress: xxxxx, when entering correct format for email and all the other fields and clicking submit button', () => {
        registerPage.emailField.setValue('wietjiskeja@gmail.com');
        registerPage.fullNameField.setValue('test test');
        registerPage.passwordField.setValue('testtest');
        registerPage.confirmPasswordfield.setValue('testtest');
        registerPage.submitButton.click();
        expect(registerPage.validationResultsEmail).toHaveTextContaining('Email address: wietjiskeja@gmail.com');
    });

    it('Validation results should show Full name: xxxxx, when entering correct format for full name and all the other fields and clicking submit button', () => {
        registerPage.emailField.setValue('wietjiskeja@gmail.com');
        registerPage.fullNameField.setValue('test test');
        registerPage.passwordField.setValue('testtest');
        registerPage.confirmPasswordfield.setValue('testtest');
        registerPage.submitButton.click();
        expect(registerPage.validatonResultsFullName).toHaveTextContaining('Full name: test test');
    });

    it('Validation results should show Password: xxxxx, when entering correct format for Password and all the other fields and clicking submit button', () => {
        registerPage.emailField.setValue('wietjiskeja@gmail.com');
        registerPage.fullNameField.setValue('test test');
        registerPage.passwordField.setValue('testtest');
        registerPage.confirmPasswordfield.setValue('testtest');
        registerPage.submitButton.click();
        expect(registerPage.validationResultsPassword).toHaveTextContaining('Password: testtest');
    });

    it('Validation results should show Confirm Password: xxxxx, when entering correct format for Password and all the other fields and clicking submit button', () => {
        registerPage.emailField.setValue('wietjiskeja@gmail.com');
        registerPage.fullNameField.setValue('test test');
        registerPage.passwordField.setValue('testtest');
        registerPage.confirmPasswordfield.setValue('testtest');
        registerPage.submitButton.click();
        expect(registerPage.validationResultsConfirmPassword).toHaveTextContaining('Confirm Password: testtest');
    });
});

describe('Tests register page link to login page', () => {

    beforeAll('open browser', () => {
        registerPage.open();
        browser.pause(1000);
    });

    it('Clicking on the here link should redirect to login form page', () => {
        registerPage.loginFormLink.click();
        expect(browser).toHaveUrl('http://localhost:4000/login.html');
    });
});