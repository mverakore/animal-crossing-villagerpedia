import { test, devices, expect } from '@playwright/test'


test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe('Testing for profile on tablet', () => {
    test('Checking justify-content of page ', async ({ page }) => {
        await page.goto('http://localhost:3000/profile/')
        const main = page.locator('main');
        const checkingFlexDirection = await main.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("justify-content")
        })
        console.log(checkingFlexDirection);
        expect(checkingFlexDirection).toBe('flex-start');
    })

    test('Checking the contents of the profile card', async ({ page }) => {

        await page.goto('http://localhost:3000/profile/')
        await expect(page.locator('main > div')).toHaveCount(1);
        await expect (page.locator('main, h1 ')).toHaveCount(1);
        await expect (page.locator('main, img')).toHaveCount(2);
        await expect (page.locator('main, p')).toHaveCount(3);
    })
})


