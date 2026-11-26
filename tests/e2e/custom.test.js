const { test, expect } = require('@playwright/test');

test('Збільшення лічильника', async ({ page }) => {
    await page.goto('/counter.html');
    await page.click('#increase');
    await expect(page.locator('#counter')).toHaveText('1');
});
test('Скидання лічильника', async ({ page }) => {
    await page.goto('/counter.html');
    await page.click('#increase');
    await page.click('#reset');
    await expect(page.locator('#counter')).toHaveText('0');
});
test('Перевірка стороннього сайту', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(
        page.getByRole('button', { name: /search/i }).first()
    ).toBeVisible();
});
