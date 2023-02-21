import { test, devices, expect } from '@playwright/test'

  test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe('Testing for home on tablet', () => {
    test("Testing for top bar", async ({ page }) => {
        await page.goto('http://localhost:3000/')
        const mainHeader = page.locator('#header');
        const checkingHeight = await mainHeader.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })
        console.log(checkingHeight);
        expect(checkingHeight).toBe('80px');
    })

    test('Checking title and tagline font size', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        const title = page.locator('.title');
        const tagline = page.locator('.tagline');
        await expect(title).toContainText('Animal Crossing Villagerpedia')
        await expect(tagline).toContainText('Check out all the villagers based on their personality!')
        const checkingTitleSize = await title.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })
        const checkingTaglineSize = await tagline.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        }
        )
        console.log(checkingTitleSize);
        console.log(checkingTaglineSize);
        expect(checkingTitleSize).toBe('32px');
        expect(checkingTaglineSize).toBe('19.2px');
    })
})
