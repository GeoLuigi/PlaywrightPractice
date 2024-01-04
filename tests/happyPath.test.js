import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import {InventoryPage} from '../pages/inventoryPage'
import { CartPage } from '../pages/cartPage'
import { CheckoutStepOnePage } from '../pages/checkoutStepOnePage'
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwoPage'
import { CheckoutCompletePage } from '../pages/checkoutCompletePage'
import { assert } from 'console'


test('Happy Path', async ({page}) => {

    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    // Login
    await page.goto('https://www.saucedemo.com/')

    await loginPage.fillUsernameField('standard_user')
    await loginPage.fillPasswordField('secret_sauce')
    await loginPage.clickLoginBtn()

    // Inventory page
    assert.strictEqual(page.url(), 'https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    assert.strictEqual(page.url(), 'https://www.saucedemo.com/cart.html', 'URL is not correct');
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    assert.strictEqual(page.url(), 'https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct');
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    assert.strictEqual(page.url(), 'https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct');
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    assert.strictEqual(page.url(), 'https://www.saucedemo.com/checkout-complete.html', 'URL is not correct');
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    assert.strictEqual(page.url(), 'https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})