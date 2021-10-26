import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckOut: ElementFinder;

  constructor() {
    this.proceedToCheckOut = $('.cart_navigation a.standard-checkout > span');
  }

  public async goToSignInStep(): Promise<void> {
    await this.proceedToCheckOut.click();
  }
}
