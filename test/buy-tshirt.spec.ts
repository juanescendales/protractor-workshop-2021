import { browser } from 'protractor';
import {
  MenuContentPage, ProductAddedModalPage, SummaryStepPage, SignInStepPage, ProductListPage,
  AdressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderSummaryPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage : SignInStepPage = new SignInStepPage();
  const adressStepPage : AdressStepPage = new AdressStepPage();
  const shippingStepPage : ShippingStepPage = new ShippingStepPage();
  const paymentStepPage : PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage : BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart();
    await productAddedModalPage.goToSummaryStep();
    await summaryStepPage.goToSignInStep();
    await signInStepPage.fillSignInData();
    await signInStepPage.goToAddressStep();
    await adressStepPage.goToShippingStep();
    await shippingStepPage.acceptTermsAndConditions();
    await shippingStepPage.goToPaymentStep();
    await paymentStepPage.goToBankPayment();
    await bankPaymentPage.goToOrderSummary();

    await expect(await orderSummaryPage.getOrderStatus())
      .toBe('Your order on My Store is complete.');
  });
});
