import { test, expect } from '@playwright/test'

test.use({
    browserName: 'chromium',
    viewport: { width: 1200, height: 720 }
}
)

test.describe('Testing for home on desktop', () => {
    test('check if all villagers are there', async ({ page }) => {
        await page.goto('http://localhost:3000/');

        const cards = await page.$$('#card');
        expect(cards.length).toBe(391);
    });
      
    test('checks if img is empty or not', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        const cards = await page.$$('#card');
      
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const src = await card.$eval('img', (el) => el.src);
          expect(src).not.toBe('');
        }
      });

      });
      
