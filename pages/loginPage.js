import {loginPageLocators} from '../locators/loginPageLocators.js'
export class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = loginPageLocators.usernameField
        this.passwordField = loginPageLocators.passwordField
        this.loginButton = loginPageLocators.loginButton
    }
    async fillUsernameField(username) {
        await this.page.fill(this.usernameField, username)
    }
    async fillPasswordField(password) {
        await this.page.fill(this.passwordField, password)
    }
    async clickLoginButton() {
        await this.page.click(this.loginButton)
    }
}