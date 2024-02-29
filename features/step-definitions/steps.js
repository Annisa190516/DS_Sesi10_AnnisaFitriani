const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const DetailProduct = require('../pageobjects/detail.product.js');
const AddCart = require('../pageobjects/add.cart.js');
const Checkout = require('../pageobjects/checkout.js');

// Langkah-langkah untuk login
Given(/^Annisa is on the login page$/, async () => {
    await LoginPage.open();
});

When(/^Annisa logs in with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username);
});

Then(/^Annisa should see home page$/, async () => {
    await HomePage.validateHomePage();
});

// Langkah-langkah untuk melihat detail produk
Given(/^Annisa is on the product detail page$/, async () => {
    await DetailProduct.open();
});

When(/^Annisa views the details of the product$/, async () => {
});

Then(/^Annisa should see the product details page$/, async () => {
    await DetailProduct.validateDetailPage();
});

// Langkah-langkah untuk menambahkan produk ke keranjang
When(/^Annisa adds the product to the cart$/, async () => {
    await AddCart.addProductToCart(); // Tambahkan produk ke keranjang
});

Then(/^Annisa should see the product in the cart$/, async () => {
});

// Langkah-langkah untuk proses checkout
Given(/^Annisa is on the cart page$/, async () => {
    await AddCart.open(); // Buka halaman keranjang
});

When(/^Annisa completes the checkout process with "([^"]*)", "([^"]*)", and "([^"]*)"$/, async (firstName, lastName, postalCode) => {
    await Checkout.completeCheckout(firstName, lastName, postalCode); // Selesaikan proses checkout dengan informasi pengiriman yang diberikan
});

When(/^Annisa clicks the finish button$/, async () => {
    await Checkout.clickFinish(); // Klik tombol selesai
});

Then(/^Annisa should see the order success message$/, async () => {
    await Checkout.verifyOrderSuccess(); // Verifikasi bahwa pesanan berhasil
});
