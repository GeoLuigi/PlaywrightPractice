import { checkoutCompleteLocators } from "../locators/checkoutCompleteLocators"
import { SideBar } from "./SideBar"

export class CheckoutCompletePage extends SideBar {
    constructor(page) {
        super(page)

        this.backToProductsBtn = checkoutCompleteLocators.backToProductsBtn
    }

    async clickBackToProductsBtn() {
        await this.page.click(this.backToProductsBtn)
    }
}