const { test, expect } = require('@playwright/test');

test('Перевірка скриншота сторінки', async ({ page }) => {
    await page.goto('/');
    expect(await page.screenshot()).toMatchSnapshot('index-page.png');
});
test('Перевірка скриншота заголовка', async ({ page }) => {
    await page.goto('/');
    expect(await page.locator('h1').screenshot()).toMatchSnapshot('index-heading.png');
});
