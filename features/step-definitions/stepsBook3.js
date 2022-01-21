import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import BookPage from '../pageobjects/book.page';
import bookPage2 from '../pageobjects/book.page2';
import bookPage from '../pageobjects/book.page';
import bookPage3 from '../pageobjects/book.page3';


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

When(/^I Apply for Rent for 2 Months$/, async () => {
    await bookPage3.book3()
});


When(/^Chat Pemilik Kos (\w+)$/, async (chat) => {
    await bookPage.book(chat)
});

Then(/^I should waiting for owner reply$/, async () => {
});

