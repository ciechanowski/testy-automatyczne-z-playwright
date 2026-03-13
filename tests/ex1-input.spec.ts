import { test, expect } from '@playwright/test';

test.describe('Find checkbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('practice/simple-elements.html');
  });

  test('Different methods to locate element', async ({ page }) => {
    // Arrange:
    const elementLocatorByDataTestId = page.getByTestId('dti-checkbox');
    const elementLocatorByRole = page.getByRole('checkbox');
    const elementLocatorById = page.locator('#id-checkbox');
    const elementLocatorByClass = page.locator('.my-checkbox');
    const elementLocatorByCustomAttribute = page.locator('[ckbx="val1"]');

    // Act:
    await expect.soft(elementLocatorByDataTestId).toBeVisible();
    await expect.soft(elementLocatorByRole).toBeVisible();
    await expect.soft(elementLocatorById).toBeVisible();
    await expect.soft(elementLocatorByClass).toBeVisible();
    await expect.soft(elementLocatorByCustomAttribute).toBeVisible();
  });
});
