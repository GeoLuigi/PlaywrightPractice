import {test, expect} from '@playwright/test';

test('Trial test', async ({page}) => {

    await page.goto('https://saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
})