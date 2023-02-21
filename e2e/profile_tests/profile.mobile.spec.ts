import { test, devices, expect } from '@playwright/test';

test.use({
  browserName: "chromium",
  ...devices['iPhone XR']
});

test.describe('Testing for profile on mobile', () => {
  test("Checking for back button visibility", async ({ page }) => {
    await page.goto('http://localhost:3000/profile/');
    const backButton = page.locator('.back');
    const checkingDisplay = await backButton.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("display");
    });
    console.log(checkingDisplay);
    expect(checkingDisplay).toBe('none');
  });

  test('Checking if back button goes back to home', async ({ page }) => {
    await page.goto('http://localhost:3000/profile/');
    const backButton = page.locator('.backbutton');
    await backButton.click();
    await expect(page).toHaveURL('http://localhost:3000/');
    });

})
