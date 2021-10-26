import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderStatus: ElementFinder;

  constructor() {
    this.orderStatus = $('#center_column > div > p.cheque-indent > strong');
  }

  public async getOrderStatus(): Promise<string> {
    return this.orderStatus.getText();
  }
}
