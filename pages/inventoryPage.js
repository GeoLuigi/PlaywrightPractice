import { inventoryPageLocators } from "../locators/inventoryPageLocators"
import {SideBar} from "./SideBar"

export class InventoryPage extends SideBar {
    constructor(page) {
        super(page)

        this.onesieClothingBtn = inventoryPageLocators.onesieClothingBtn
        this.fleeceJacketClothingBtn = inventoryPageLocators.fleeceJacketClothingBtn
        this.shoppingCartBtn = inventoryPageLocators.shoppingCartBtn
    }

    async clickOnesieClothingBtn() {
        await this.page.click(this.onesieClothingBtn)
    }

    async clickFleeceJacketClothingBtn() {
        await this.page.click(this.fleeceJacketClothingBtn)
    }

    async clickShoppingCartBtn() {
        await this.page.click(this.shoppingCartBtn)
    }
}