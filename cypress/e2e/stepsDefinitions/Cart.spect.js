const {Given, When, And, Then} = require('cypress-cucumber-preprocessor/steps');
const {cartPage} = require('../../support/pageObjectModel/CartPage');
const { productPage } = require('../../support/pageObjectModel/ProductPage');
const {payment, checkout, cart} = Cypress.env('endpoints');

describe('Add Products in Cart', () => {

    And('click Add to cart', ()=> {
        productPage.clickToAddProductToCart();
    });

    And('click on view cart', () => {
        productPage.clickToViewCart();
    });

    Then('I see the cart', () => {
        cy.url().should('contains', cart)
    });

    And('click on proceed to checkout', () => {
        cartPage.clickOnCheckOut();
    });

    And('I see address details section', () => {
        cy.url().should('contains', checkout);
    });

    And('click on order button', () => {
        cartPage.clickOnPlaceOrder();
    });

    And('I see payment section', () => {
        cy.url().should('contains', payment);
    });


    Then('fill payment form', (dataTable) => {
        dataTable.hashes().forEach(element => {
            cartPage.typeNameCard(element.nameCard);
            cartPage.typeNumberCard(element.cardNumber);
            cartPage.typeCvc(element.cvc);
            cartPage.typeExpMonth(element.expMonth);
            cartPage.typeExpYear(element.expYear);
        });
    });

    And('click on payment button', () => {
        cartPage.clickOnPayment();
    });

    And('I see the successfully message {string}', (message) => {
        cy.wait(4000);
        cartPage.get.successMessage().as('message').should('be.visible').contains(message)
    });
    
});