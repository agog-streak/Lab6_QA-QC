const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сайту', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});
test('Перевірка меню навігації', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.locator('nav').first()).toBeVisible();
});
test('Перевірка переходу за посиланням', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started', exact: true }).first().click();
    await expect(page).toHaveURL(/docs\/intro/);
});
