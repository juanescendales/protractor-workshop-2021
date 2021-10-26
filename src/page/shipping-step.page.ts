import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsAndConditions: ElementFinder;

  private procceedToCheckOutButton: ElementFinder;

  constructor() {
    this.termsAndConditions = $('#cgv');
    this.procceedToCheckOutButton = $('#form > p.cart_navigation > button > span');
  }

  public async acceptTermsAndConditions(): Promise<void> {
    await this.termsAndConditions.click();
  }

  public async goToPaymentStep(): Promise<void> {
    await this.procceedToCheckOutButton.click();
  }
}
