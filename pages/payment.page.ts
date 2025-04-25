import { Locator, Page } from '@playwright/test';
import { sideMenuComponent } from '../components/side-menu.component';

export class PaymentPage {
  sideMenu: sideMenuComponent;
  transferReceiverInput: Locator;
  transferAccountInput: Locator;
  transferAmountInput: Locator;
  transferButton: Locator;
  actionCloseButton: Locator;
  messageText: Locator;

  constructor(private page: Page) {
    this.sideMenu = new sideMenuComponent(this.page);

    this.transferReceiverInput = this.page.getByTestId('transfer_receiver');
    this.transferAccountInput = this.page.getByTestId('form_account_to');
    this.transferAmountInput = this.page.getByTestId('form_amount');

    this.transferButton = this.page.getByRole('button', {
      name: 'wykonaj przelew',
    });
    this.actionCloseButton = this.page.getByTestId('close-button');

    this.messageText = this.page.locator('#show_messages');
  }
}
