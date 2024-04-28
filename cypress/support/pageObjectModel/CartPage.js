import { number } from "assert-plus";

class CartPage {

    //constructor
    get = {
        checkOutButton: () => cy.get('#do_action > div.container > div > div > a').should('be.visible'),
        placeOrderButton: () => cy.get('#cart_items > div > div:nth-child(7) > a').should('be.visible'),
        nameCard: () => cy.get('input[name="name_on_card"]').should('be.visible'),
        numberCard: () => cy.get('input[name="card_number"]').should('be.visible'),
        cvc: () => cy.get('input[name="cvc"]').should('be.visible'),
        expirationMonth: () => cy.get('input[name="expiry_month"]').should('be.visible'),
        expirationYear: () => cy.get('input[name="expiry_year"]').should('be.visible'),
        paymentButton: () => cy.get('#submit'),
        successMessage: () => cy.get('#form > div > div > div > p')
    }

    clickOnCheckOut() {
        this.get.checkOutButton().click({force: true});
    }

    clickOnPlaceOrder() {
        this.get.placeOrderButton().click({force: true});
    }

    clickOnPayment() {
        this.get.paymentButton().click({force: true});
    }

    typeNameCard(data) {
        this.get.nameCard().type(data);
    }

    typeNumberCard(data) {
        this.get.numberCard().type(data);
    }

    typeCvc(data) {
        this.get.cvc().type(data);
    }

    typeExpMonth(data) {
        this.get.expirationMonth().type(data);
    }

    typeExpYear(data) {
        this.get.expirationYear().type(data);
    }
}

export const cartPage = new CartPage();