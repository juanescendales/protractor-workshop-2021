import { browser } from 'protractor';
import {
  MenuContentPage, ProductAddedModalPage, SummaryStepPage, SignInStepPage, ProductListPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderSummaryPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage : SignInStepPage = new SignInStepPage();
  const addressStepPage : AddressStepPage = new AddressStepPage();
  const shippingStepPage : ShippingStepPage = new ShippingStepPage();
  const paymentStepPage : PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage : BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  describe('Open the page in browser', () => {
    it('Open page ', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Selecting t-shirt process page', () => {
    it('Go to T-Shirt sub menu', async () => {
      await menuContentPage.goToTShirtMenu();
    });
    it('Add product to cart', async () => {
      await productListPage.addToCart();
    });
    it('Go to check out process  ', async () => {
      await productAddedModalPage.goToSummaryStep();
    });
    it('Continue the check out process to login', async () => {
      await summaryStepPage.goToSignInStep();
    });
  });

  describe('Log in process page', () => {
    it('Fill the credentials', async () => {
      await signInStepPage.fillSignInData();
    });

    it('Continue the check out process to address', async () => {
      await signInStepPage.goToAddressStep();
    });
  });

  describe('Select default address', () => {
    it('Selecting default address and continue to shipping', async () => {
      await addressStepPage.goToShippingStep();
    });
    it('Accept terms and conditions for shipping', async () => {
      await shippingStepPage.acceptTermsAndConditions();
    });
    it('Continue the check out process to payment process', async () => {
      await shippingStepPage.goToPaymentStep();
    });
  });

  describe('Bank payment', () => {
    it('Select bank payment', async () => {
      await paymentStepPage.goToBankPayment();
    });

    it('Confirm bank payment before order summary', async () => {
      await bankPaymentPage.goToOrderSummary();
    });

    it('Confirm the success of the order', async () => {
      await expect(await orderSummaryPage.getOrderStatus())
        .toBe('Your order on My Store is complete.');
    });
  });
});
