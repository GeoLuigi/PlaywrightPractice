import {sideBarLocators} from '../locators/sideBarLocators.js'

export class SideBar {
    constructor(page) {
        this.page = page
        this.reactBurgerMenuBtn = sideBarLocators.reactBurgerMenuBtn
        this.logoutBtn = sideBarLocators.logoutBtn
    }
    async clickBurgerMenu() {
        await this.page.click(this.reactBurgerMenuBtn)
    }
    async clickLogout() {
        await this.page.click(this.logoutBtn)
    }
}