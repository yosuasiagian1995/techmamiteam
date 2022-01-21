

import Page2 from './page2';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookPage2 extends Page2 {
    /**
     * define selectors using getter methods
     */

     get date1() {
        return $('div:nth-of-type(22) > .cell');
    }
     get perBulan() {
        return $('.mami-radio');
    }

    get ajukanSewa() {
        return $('.text-normalize[data-v-0d89c110]'); 
    }

    get agreement() {
        return $('.bg-c-checkbox__icon > .bg-c-icon');
    }
    get chatPemilikKos() {
        return $('.booking-success__button-chat');
    }

    get chat() {
        return $('.mc-typing-bar__input');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async book2 () {
        await this.date1.click();
        await this.perBulan.click();
        await this.ajukanSewa.click();
        await this.agreement.click();
        await this.chatPemilikKos.click();
    }

    async chat () {
        await this.inputChat.setValue(this.chat);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open2() {
        return super.open('Duo');
    }

}

export default new BookPage2();