import { LoginUserModel } from '@_src/models/user.model';
import { LoginPage } from '@_src/pages/login.page';
import { WelcomePage } from '@_src/pages/welcome.page';
import { testUser1 } from '@_src/test-data/user-data';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  test(
    'login with correct credentials',
    { tag: '@GAD-R02-01' },
    async ({ page }) => {
      // Arrange
      const expectedWelcomeTitle = 'Welcome';
      const loginPage = new LoginPage(page);
      const welcomePage = new WelcomePage(page);

      // Act
      await loginPage.goto();
      await loginPage.login(testUser1);

      const titleWelcome = await welcomePage.getTitle();

      // Assert
      expect(titleWelcome).toContain(expectedWelcomeTitle);
    },
  );

  test(
    'reject login with incorrect password',
    { tag: '@GAD-R02-01' },
    async ({ page }) => {
      // Arrange
      const expectedLoginTitle = 'Login';
      const loginPage = new LoginPage(page);

      const loginUserData: LoginUserModel = {
        userEmail: testUser1.userEmail,
        userPassword: 'test',
      };

      // Act
      await loginPage.goto();
      await loginPage.login(loginUserData);

      // Assert
      await expect
        .soft(loginPage.loginError)
        .toHaveText('Invalid username or password');
      const titleLogin = await loginPage.getTitle();
      expect.soft(titleLogin).toContain(expectedLoginTitle);
    },
  );
});
