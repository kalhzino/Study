import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
const pages = {
    login: LoginPage
}
const user = "allan.costa@acct.global";
const password = ".Z*JFxK5f6Xwb4K";

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.open();
    await LoginPage.close_NewsLetter();
});

When(/^I do login using email and password$/,async () => {
    await LoginPage.click_login();
    await LoginPage.click_btn_enter_email_password();
	await LoginPage.typeUername(user)
    await LoginPage.typerPassword(password)
    await LoginPage.click_Btnlogin();
    
});

When(/^i make a card data change$/, async () => {
    await LoginPage.awaitForModal();
    await LoginPage.btnAbrirModalMyAccountclick();
    await LoginPage.openCardMyAccount();
    await LoginPage.clickBtnNewCard();
    await LoginPage.input_CardNum("5394 7844 4079 7050");
});

Then(/^the data is actualized correctly$/, async () => {
	return true;
});

Then(/^i'm redirected to the my account page$/, async () => {
	return true;
});