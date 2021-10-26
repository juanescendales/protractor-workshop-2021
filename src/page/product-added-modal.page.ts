import {
  $, ElementFinder, ExpectedConditions as EC, browser,
} from 'protractor';

export class ProductAddedModalPage {
  private procceedToCheckOutButton: ElementFinder;

  constructor() {
    this.procceedToCheckOutButton = $('#layer_cart .button-container > a');
  }

  public async goToSummaryStep(): Promise<void> {
    await browser.wait(EC.visibilityOf(this.procceedToCheckOutButton), 4000);
    await this.procceedToCheckOutButton.click();
  }
}
