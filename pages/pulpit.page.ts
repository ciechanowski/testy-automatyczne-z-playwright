import { Locator, Page } from '@playwright/test';

export class PulpitPage {
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
}
