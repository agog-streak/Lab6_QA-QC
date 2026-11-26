const { test, expect } = require('@playwright/test');

test('Скриншот сторінки лічильника', async ({ page }) => {
    await page.goto('/counter.html');
    await expect(page).toHaveScreenshot('counter-page.png');
});
test('Скриншот елемента лічильника', async ({ page }) => {
    await page.goto('/counter.html');
    await expect(page.locator('#counter')).toHaveScreenshot('counter-element.png');
});
