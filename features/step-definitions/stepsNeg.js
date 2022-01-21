import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';



const pages = {
    login: LoginPage
}



Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I will see pop up Nomor dan password tidak sesuai$/, async () => {
    await LoginPageNegative.expectPopUpNegative()
});

