import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {
	test('successful login with correct credentials', async ({ page }) => {
		// Arrange
		const url = 'https://demo-bank.vercel.app/';
		const userId = 'kotki123';
		const userPassword = 'kotki123';
		const expectedUserName = 'Jan Demobankowy';

		// Act
		await page.goto(url);
		await page.getByTestId('login-input').fill(userId);
		await page.getByTestId('password-input').fill(userPassword);
		await page.getByTestId('login-button').click();

		// Assert
		await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
	});

	test('unsuccessful login too short username', async ({ page }) => {
		await page.goto('https://demo-bank.vercel.app/');
		await page.getByTestId('login-input').fill('kotki');
		await page.getByTestId('password-input').click();

		await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');
	});

	test('unsuccessful login too short password', async ({ page }) => {
		await page.goto('https://demo-bank.vercel.app/');
		await page.getByTestId('login-input').fill('kotki123');
		await page.getByTestId('password-input').fill('kotki');
		await page.getByTestId('password-input').blur();

		await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków');
	});
});
