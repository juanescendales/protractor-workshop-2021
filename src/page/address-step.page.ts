import {
  $, ElementFinder, ExpectedConditions as EC, browser,
} from 'protractor';

export class AddressStepPage {
  private procceedToCheckOutButton: ElementFinder;
  constructor() {
    this.procceedToCheckOutButton = $('#center_column > form > p.cart_navigation > button > span');
  }
  public async goToShippingStep(): Promise<void> {
    await browser.wait(EC.visibilityOf(this.procceedToCheckOutButton), 3000);
    await this.procceedToCheckOutButton.click();
  }
}
