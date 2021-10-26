import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;

  private passwordField: ElementFinder;

  private submitButton: ElementFinder;

  constructor() {
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.submitButton = $('#SubmitLogin > span');
  }

  public async fillSignInData(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
  }

  public async goToAddressStep(): Promise<void> {
    await this.submitButton.click();
  }
}
