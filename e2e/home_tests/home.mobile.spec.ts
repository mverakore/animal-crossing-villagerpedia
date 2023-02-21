import { test, devices, expect } from '@playwright/test'

test.use({
    browserName: "chromium",
    ...devices['iPhone XR']
})

test.describe('Testing for home on mobile', () => {
    test("checking for top bar width", async ({ page }) => {
        await page.goto('http://localhost:3000/')
        const mainHeader = page.locator('#header');
        const checkingHeight = await mainHeader.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })

        console.log(checkingHeight);
        expect(checkingHeight).toBe('40px');


    })

    test('checking for filter button padding', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        const button = page.locator('.filter-button');
        const checkingPadding = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })
        console.log(checkingPadding);
        expect(checkingPadding).toBe('0px 16px');
    })

})
