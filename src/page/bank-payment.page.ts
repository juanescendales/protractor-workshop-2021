import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmMyOrder: ElementFinder;

  constructor() {
    this.confirmMyOrder = $('#cart_navigation > button > span');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.confirmMyOrder.click();
  }
}
