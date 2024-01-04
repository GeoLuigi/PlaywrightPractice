import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import {InventoryPage} from '../pages/inventoryPage'
import { CartPage } from '../pages/cartPage'
import { CheckoutStepOnePage } from '../pages/checkoutStepOnePage'
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwoPage'
import { CheckoutCompletePage } from '../pages/checkoutCompletePage'


test('Happy Path (standard_user)', async ({page}) => {

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
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct')
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html', 'URL is not correct')
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct')
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct')
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html', 'URL is not correct')
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct')
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})

test('Happy Path (locked_out_user)', async ({page}) => {

    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    // Login
    await page.goto('https://www.saucedemo.com/')

    await loginPage.fillUsernameField('locked_out_user')
    await loginPage.fillPasswordField('secret_sauce')
    await loginPage.clickLoginBtn()

    // Inventory page
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html', 'URL is not correct');
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct');
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct');
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html', 'URL is not correct');
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})

test('Happy Path (problem_user)', async ({page}) => {

    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    // Login
    await page.goto('https://www.saucedemo.com/')

    await loginPage.fillUsernameField('problem_user')
    await loginPage.fillPasswordField('secret_sauce')
    await loginPage.clickLoginBtn()

    // Inventory page
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html', 'URL is not correct');
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct');
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct');
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html', 'URL is not correct');
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})

test('Happy Path (performance_glitch_user)', async ({page}) => {

    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    // Login
    await page.goto('https://www.saucedemo.com/')

    await loginPage.fillUsernameField('performance_glitch_user')
    await loginPage.fillPasswordField('secret_sauce')
    await loginPage.clickLoginBtn()

    // Inventory page
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html', 'URL is not correct');
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct');
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct');
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html', 'URL is not correct');
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})

test('Happy Path (error_user)', async ({page}) => {

    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    // Login
    await page.goto('https://www.saucedemo.com/')

    await loginPage.fillUsernameField('error_user')
    await loginPage.fillPasswordField('secret_sauce')
    await loginPage.clickLoginBtn()

    // Inventory page
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html', 'URL is not correct');
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct');
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct');
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html', 'URL is not correct');
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})

test('Happy Path (visual_user)', async ({page}) => {

    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    // Login
    await page.goto('https://www.saucedemo.com/')

    await loginPage.fillUsernameField('visual_user')
    await loginPage.fillPasswordField('secret_sauce')
    await loginPage.clickLoginBtn()

    // Inventory page
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickOnesieClothingBtn()
    await inventoryPage.clickFleeceJacketClothingBtn()
    await inventoryPage.clickShoppingCartBtn()


    // Cart page
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html', 'URL is not correct');
    await cartPage.clickCheckoutBtn()

    // Checkout step one page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html', 'URL is not correct');
    await checkoutStepOnePage.fillFirstNameField('Jorge')
    await checkoutStepOnePage.fillLastNameField('The best QA automation engineer')
    await checkoutStepOnePage.fillPostalCodeField('12345')
    await checkoutStepOnePage.clickContinueBtn()

    // Checkout step two page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html', 'URL is not correct');
    await checkoutStepTwoPage.clickFinishBtn()

    // Checkout complete page
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html', 'URL is not correct');
    await checkoutCompletePage.clickBurgerMenuBtn()
    await checkoutCompletePage.clickBackToProductsBtn()

    // Inventory page again
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html', 'URL is not correct');
    await inventoryPage.clickBurgerMenuBtn()
    await inventoryPage.clickLogoutBtn()
})