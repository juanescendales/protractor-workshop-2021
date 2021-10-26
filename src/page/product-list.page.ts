import {
  $, ElementFinder, ExpectedConditions as EC, browser,
} from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor() {
    this.addToCartButton = $('#center_column .product-container a.ajax_add_to_cart_button');
  }

  public async addToCart(): Promise<void> {
    await browser.wait(EC.presenceOf(this.addToCartButton), 4000);
    await this.addToCartButton.click();
  }
}
