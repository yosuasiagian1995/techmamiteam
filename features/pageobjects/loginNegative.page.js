

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPageNegative extends Page {
    /**
     * define selectors using getter methods
     */
     get inputUsername() {
        return $('.login-input:nth-child(1) .form-login-input:nth-child(2)');
    }

    get inputPassword() {
        return $('.login-input:nth-child(2) .form-login-input:nth-child(2)');
    }

    get btnSubmit() {
        return $(`//button[@class='btn btn-primary btn-mamigreen login-button track-login-tenant']`);
    }

    get expectPopUpNegative() {
        return $('fieldset > div:nth-of-type(2) > .error-message');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.expectPopUpNegative.getValue();
    }

    async expectPopUp() {
        await this.expectPopUpNegative.getValue();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }

}

export default new LoginPageNegative();