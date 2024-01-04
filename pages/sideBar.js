import {sideBarLocators} from '../locators/sideBarLocators.js'

export class SideBar {
    constructor(page) {
        this.page = page
        this.reactBurgerMenuBtn = sideBarLocators.reactBurgerMenuBtn
        this.logoutBtn = sideBarLocators.logoutBtn
    }
    async clickBurgerMenuBtn() {
        await this.page.click(this.reactBurgerMenuBtn)
    }
    async clickLogoutBtn() {
        await this.page.click(this.logoutBtn)
    }
}