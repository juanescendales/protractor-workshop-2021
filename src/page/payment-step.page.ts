import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWire: ElementFinder;

  constructor() {
    this.payByBankWire = $('#HOOK_PAYMENT p.payment_module > a.bankwire');
  }

  public async goToBankPayment(): Promise<void> {
    await this.payByBankWire.click();
  }
}
