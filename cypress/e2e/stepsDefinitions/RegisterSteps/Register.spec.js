const {Given, When, And, Then, Before, After} = require('cypress-cucumber-preprocessor/steps');
const { register } = require('../../../support/pageObjectModel/RegisterPage');
const { faker } = require('@faker-js/faker');
const { login } = require('../../../support/pageObjectModel/LoginPage');
const { elementAt } = require('rxjs');
const { authentication, signup, accountCreated } = Cypress.env('endpoints');


const data = {
    'name': faker.person.firstName(),
    'email': faker.internet.email()
}

Before(() => {

    cy.log('Started test');
    cy.log(`Endpoint ${authentication}`);

    Given ('the user is on the login page', () => {
        cy.visit(authentication);
        cy.url().should('contains', authentication);
    });

});


describe('Register successfully', () => {

    When ('the user enters email and name', () => {
        register.typeName(data.name);
        register.typeEmail(data.email);
    });

    And ('the user clicks on sign up button', () => {
        register.clickSignUp();
    });

    And ('the user is redirected to sign up page', () => {
        cy.url().should('contain', signup);
    });

    Then ('the user fill account information', (dataTable) => {
        dataTable.hashes().forEach(element => {
            register.clickTitle();
            register.typePassword(element.password);
            register.selectDay(element.day);
            register.selectMonth(element.month);
            register.selectYear(element.year);
            register.typeFirstName(element.firstName);
            register.typeLastName(element.lastName);
            register.typeCompany(element.company);
            register.typeAddress(element.address);
            register.selectCountry(element.country);
            register.typeState(element.state);
            register.typeCity(element.city);
            register.typeZipCode(element.zipcode);
            register.typeMobileNumber(element.cellPhone);
        })
    });

    And ('clicks on create account', () => {
        register.clickCreateAccount();
    });

    Then ('the user has been registered with the message {string}', (message) => {
        cy.url().should('contains', accountCreated);
    });


});

describe('Register user with existing email', () => {

    When ('the user enters a exsiting email', (dataTable) => {
        dataTable.hashes().forEach(element => {
            register.typeName(data.name);
            register.typeEmail(element.email);
        });
    });

    Then ('an error message should be displayed for a existing email {string}', (errorMessage) => {
        cy.contains(errorMessage);
    });

});

After(() => {
    cy.log('Finished test');
});