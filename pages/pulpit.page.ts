import { Locator, Page } from '@playwright/test';
import { sideMenuComponent } from '../components/side-menu.component';

export class PulpitPage {
  sideMenu: sideMenuComponent;
  receiverIdSelect: Locator;
  transferAmountInput: Locator;
  transferTitleInput: Locator;
  transferButton: Locator;
  actionCloseButton: Locator;
  messageText: Locator;
  topUpReceiverSelect: Locator;
  topUpAmountInput: Locator;
  topUpAgreementCheckbox: Locator;
  topUpExecuteButton: Locator;
  moneyValueText: Locator;
  userNameText: Locator;

  constructor(private page: Page) {
    this.sideMenu = new sideMenuComponent(this.page);

    this.receiverIdSelect = this.page.locator('#widget_1_transfer_receiver');
    this.transferAmountInput = this.page.locator('#widget_1_transfer_amount');
    this.transferTitleInput = this.page.locator('#widget_1_transfer_title');

    this.transferButton = this.page.getByRole('button', { name: 'wykonaj' });
    this.actionCloseButton = this.page.getByTestId('close-button');

    this.messageText = this.page.locator('#show_messages');

    this.topUpReceiverSelect = this.page.locator('#widget_1_topup_receiver');
    this.topUpAmountInput = this.page.locator('#widget_1_topup_amount');
    this.topUpAgreementCheckbox = this.page.locator(
      '#uniform-widget_1_topup_agreement span',
    );

    this.topUpExecuteButton = this.page.getByRole('button', {
      name: 'doładuj telefon',
    });

    this.moneyValueText = this.page.locator('#money_value');
    this.userNameText = this.page.getByTestId('user-name');
  }

  async executeQuickPayment(
    receiverId: string,
    transferAmount: string,
    transferTitle: string,
  ): Promise<void> {
    await this.receiverIdSelect.selectOption(receiverId);
    await this.transferAmountInput.fill(transferAmount);
    await this.transferTitleInput.fill(transferTitle);

    await this.transferButton.click();
    await this.actionCloseButton.click();
  }

  async executeMobileTopUp(
    topUpReceiver: string,
    topUpAmount: string,
  ): Promise<void> {
    await this.topUpReceiverSelect.selectOption(topUpReceiver);
    await this.topUpAmountInput.fill(topUpAmount);
    await this.topUpAgreementCheckbox.click();

    await this.topUpExecuteButton.click();
    await this.actionCloseButton.click();
  }
}
