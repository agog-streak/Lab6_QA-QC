const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
    testDir: './tests',
    reporter: [['list'], ['html', { open: 'never' }]],
    use: { baseURL: 'http://localhost:3000', headless: true, trace: 'off' },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        ...(process.env.LAB_PHASE === '1' ? [] : [{ name: 'webkit', use: { ...devices['Desktop Safari'] } }]),
    ],
    webServer: { command: 'npm run start', url: 'http://localhost:3000', reuseExistingServer: !process.env.CI },
});
