import { Locator, Page } from '@playwright/test';

export class PlaywrightPage {
  link: Locator;

  constructor(private page: Page) {
    this.link = page.getByRole('link', { name: 'Get started' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
  }
}
