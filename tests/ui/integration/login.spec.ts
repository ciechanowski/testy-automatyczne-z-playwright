import { expect, test } from '@_src/ui/fixtures/merge.fixture';
import { LoginUserModel } from '@_src/ui/models/user.model';
import { testUser1 } from '@_src/ui/test-data/user-data';

test.describe('Verify login', () => {
  test(
    'login with correct credentials',
    { tag: '@GAD-R02-01' },
    async ({ loginPage }) => {
      // Arrange
      const expectedWelcomeTitle = 'Welcome';

      // Act
      const welcomePage = await loginPage.login(testUser1);

      const titleWelcome = await welcomePage.getTitle();

      // Assert
      expect(titleWelcome).toContain(expectedWelcomeTitle);
    },
  );

  test(
    'reject login with incorrect password',
    { tag: '@GAD-R02-01' },
    async ({ loginPage }) => {
      // Arrange
      const expectedLoginTitle = 'Login';

      const loginUserData: LoginUserModel = {
        userEmail: testUser1.userEmail,
        userPassword: 'test',
      };

      // Act
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
