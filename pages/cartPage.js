import { cartPageLocators } from "../locators/cartPageLocators"
import { SideBar } from "./SideBar"

export class CartPage extends SideBar {
    constructor(page) {
        super(page)

        this.checkoutBtn = cartPageLocators.checkoutBtn
    }

    async clickCheckoutBtn() {
        await this.page.click(this.checkoutBtn)
    }
}