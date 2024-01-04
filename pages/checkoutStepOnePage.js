import { checkoutStepOneLocators } from "../locators/checkoutStepOneLocators"
import { SideBar } from "./SideBar"

export class CheckoutStepOnePage extends SideBar{
    constructor(page) {
        super(page)

        this.firstNameField = checkoutStepOneLocators.firstNameField
        this.lastNameField = checkoutStepOneLocators.lastNameField
        this.postalCodeField = checkoutStepOneLocators.postalCodeField
        this.continueBtn = checkoutStepOneLocators.continueBtn
    }

    async fillFirstNameField(firstName) {
        await this.page.fill(this.firstNameField, firstName)
    }

    async fillLastNameField(lastName) {
        await this.page.fill(this.lastNameField, lastName)
    }

    async fillPostalCodeField(postalCode) {
        await this.page.fill(this.postalCodeField, postalCode)
    }

    async clickContinueButton() {
        await this.page.click(this.continueBtn)
    }
}