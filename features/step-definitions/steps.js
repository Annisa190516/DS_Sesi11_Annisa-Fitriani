const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const DetailProduct = require('../pageobjects/detail.product.js');
const AddCart = require('../pageobjects/add.cart.js');
const Checkout = require('../pageobjects/checkout.js');
const InventoryPage = require('../pageobjects/inventory.page.js');

// Login Feature Test
Given(/^Annisa is on the login page$/, async () => {
    await LoginPage.open();
});

When(/^Annisa login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username);
});

Then(/^Annisa should see home page$/, async() => {
    await HomePage.validateHomePage();
});

Then(/^Annisa should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage);
});

// Add Cart to Checkout Feature Test
Given(/^Annisa is on the product detail page$/, async () => {
    await DetailProduct.open();
});

When(/^Annisa views the details of the product$/, async () => {
});

Then(/^Annisa should see the product details page$/, async () => {
    await DetailProduct.validateDetailPage();
});

When(/^Annisa adds the product to the cart$/, async () => {
    await AddCart.addProductToCart();
});

Then(/^Annisa should see the product in the cart$/, async () => {
});

Given(/^Annisa is on the cart page$/, async () => {
    await AddCart.open();
});

When(/^Annisa completes the checkout process with "([^"]*)", "([^"]*)", and "([^"]*)"$/, async (firstName, lastName, postalCode) => {
    await Checkout.completeCheckout(firstName, lastName, postalCode);
});

When(/^Annisa clicks the finish button$/, async () => {
    await Checkout.clickFinish();
});

Then(/^Annisa should see the order success message$/, async () => {
    await Checkout.verifyOrderSuccess();
});

Given(/^Annisa is on the home page$/, async () => {
    await InventoryPage.open();
});

When(/^Annisa filters products by "(.*)"$/, async (filterOption) => {
    await InventoryPage.filterProducts(filterOption);
});

Then(/^Annisa should see the products sorted "(.*)"$/, async (filterOption) => {
    const sorted = await InventoryPage.areProductsSorted(filterOption);
    expect(sorted).toBe(true);
});
