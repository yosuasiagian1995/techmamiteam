import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import BookPage from '../pageobjects/book.page';


const pages = {
    login: LoginPage
   
}

const pages2 = {
    book: BookPage
   
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I am on the (\w+) Tenan page$/, async (page2) => {
    await pages2[page2].open2()
});

When(/^I Apply for Rent$/, async (page2) => {
    await BookPage.book()
});


When(/^Chat Pemilik Kos (\w+)$/, async (chat) => {
    await BookPage.book(chat)
});

Then(/^I should waiting for owner reply$/, async () => {
});

