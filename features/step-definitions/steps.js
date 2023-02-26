import { Given, When, Then } from '@cucumber/cucumber';

const LoginPage = require('../pageobjects/login.page.js');
const DashboardPage = require('../pageobjects/dashboard.page.js');


//LOGIN
Given('I am on the login page', async () => {
    await LoginPage.open();
    await expect(browser).toHaveTitle('kasirAja');
});

When('I input email as {string} and password as {string}', async function (email, password) {
    await LoginPage.emailTextBox.setValue(email);
    await LoginPage.passwordTextBox.setValue(password);
});

When('I click login button', async () => {
    await LoginPage.loginButton.click();
});

Then('I must directed to dashboard page', async () => {
    await expect(DashboardPage.dashboardPageElement).toExist();
});

Then('I still on login page and see error message {string}', async function (errorMessageLogin) {
    await expect(LoginPage.messageElement).toExist();
    await expect(LoginPage.messageElement).toHaveTextContaining(errorMessageLogin);
});

Given('I am on the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When('I click pengguna on the sidebar', async () => {
    await DashboardPage.penggunaMenuElement.click();
});

When('I click button tambah', async () => {
    await DashboardPage.btnTambahPengguna.click();
});

When('I fill name as {string} and email as {string} and password as {string}', async function (name, email, password) {
    await DashboardPage.inputName.setValue(name);
    await DashboardPage.inputEmail.setValue(email);
    await DashboardPage.inputPassword.setValue(password);
});

When('I click button simpan', async () => {
    await DashboardPage.btnSimpanPengguna.click();
});

Then('I see a success message', async () => {
    await expect(DashboardPage.messageElement).toExist();
});

Then('I cant add user and see error message {string}', async function (errorMessageUser) {
    await expect(DashboardPage.errorMessageUser).toExist();
    await expect(DashboardPage.errorMessageUser).toHaveTextContaining(errorMessageUser);
});