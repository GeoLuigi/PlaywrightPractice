import { checkoutStepTwoLocators } from "../locators/ckeckoutStepTwoLocators"
import { SideBar } from "./SideBar"

export class CheckoutStepTwoPage extends SideBar {
    constructor(page) {
        super(page)

        this.finishBtn = checkoutStepTwoLocators.finishBtn
    }

    async clickFinishBtn() {
        await this.page.click(this.finishBtn)
    }
}
