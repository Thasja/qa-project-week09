const loginPage = require('../pageobjects/login.page.js');

describe('Tests login page Email Adress field', () => {

    beforeAll('open browser', () => {
        loginPage.open();
        browser.pause(1000);
    });

    it('Email error message should show when entering incorrect email format', () => {
        loginPage.emailField.setValue('test');
        browser.keys('Tab');
        expect(loginPage.emailErrorMessage).toHaveText('You need to enter a valid Email address.');
    });

    it('Email error message should show when entering nothing in email field', () => {
        loginPage.emailField.setValue('');
        browser.keys('Tab');
        expect(loginPage.emailErrorMessage).toHaveText('You need to enter a valid Email address.');
    });

    it('Email error message should show when entering only spaces in email field', () => {
        loginPage.emailField.setValue('      ');
        browser.keys('Tab');
        expect(loginPage.emailErrorMessage).toHaveText('You need to enter a valid Email address.');
    });

    it('Email error message should NOT show when entering correct email format', () => {
        loginPage.emailField.setValue('wietjiskeja@gmail.com');
        browser.keys('Tab');
        expect(loginPage.emailErrorMessage).toHaveText('');
    });
});

describe('Tests login page Password field', () => {

    beforeAll('open browser', () => {
        loginPage.open();
        browser.pause(1000);
    });
        
    it('Password error message should show when entering less than 8 characters in password field', () => {
        loginPage.passwordField.setValue('test');
        browser.keys('Tab');
        expect(loginPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should show when entering characters other than numbers and letters in password field', () => {
        loginPage.passwordField.setValue('test&"/(');
        browser.keys('Tab');
        expect(loginPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should show when entering only spaces in password field', () => {
        loginPage.passwordField.setValue('          ');
        browser.keys('Tab');
        expect(loginPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should show when entering nothing in password field', () => {
        loginPage.passwordField.setValue('');
        browser.keys('Tab');
        expect(loginPage.passwordErrorMessage).toHaveText('Incorrect password. A password should have at least 8 characters and only numbers and letters.');
    });

    it('Password error message should NOT show when entering a correct format in password field', () => {
        loginPage.passwordField.setValue('testtest789');
        browser.keys('Tab');
        expect(loginPage.passwordErrorMessage).toHaveText('');
    });
});

describe('Tests login page Validation results', () => {

    beforeAll('open browser', () => {
        loginPage.open();
        browser.pause(1000);
    });

    it('Validation results should only show Every validation has passed, when entering incorrect format for email and password field and clicking Log in button', () => {
        loginPage.emailField.setValue('test');
        loginPage.passwordField.setValue('test');
        loginPage.loginButton.click();
        expect(loginPage.validationResults).toHaveText('Every validation has passed');
    });

    it('Validation results should show: Email adress: xxxxx, when entering correct format for email and password field and clicking Log in button', () => {
        loginPage.emailField.setValue('wietjiskeja@gmail.com');
        loginPage.passwordField.setValue('testtest345');
        loginPage.loginButton.click();
        expect(loginPage.validationResultsEmail).toHaveTextContaining('Email adress: wietjiskeja@gmail.com');
    });

    it('Validation results should show: Password: xxxxx, when entering correct format for email and password field and clicking Log in button', () => {
        loginPage.emailField.setValue('wietjiskeja@gmail.com');
        loginPage.passwordField.setValue('testtest345');
        loginPage.loginButton.click();
        expect(loginPage.validationResultsPassword).toHaveTextContaining('Password: testtest345');
    });
});

describe('Tests login page link to register page', () => {

    beforeAll('open browser', () => {
        loginPage.open();
        browser.pause(1000);
    });

    it('Clicking on the here link should redirect to register form page', () => {
        loginPage.registerFormLink.click();
        expect(browser).toHaveUrl('http://localhost:4000/register.html');
    });
});