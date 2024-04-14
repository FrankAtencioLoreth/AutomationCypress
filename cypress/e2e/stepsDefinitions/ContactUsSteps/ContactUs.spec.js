const {Given, When, And, Then, Before, After} = require('cypress-cucumber-preprocessor/steps');
const { contacUs } = require('../../../support/pageObjectModel/ContactUsPage');
const { contactUsForm } = Cypress.env('endpoints');

Before(() => {
    cy.log('Started test');
    cy.log(`Endpoint ${contactUsForm}`);

    Given ('the user is on the contact us form page', () => {
        cy.visit(contactUsForm);
        cy.url().should('contains', contactUsForm); 
    });
});

describe('Contact us form', () => {

    When ('the user fill the contact form', (dataTable) => {
        dataTable.hashes().forEach(element => {
            contacUs.typeName(element.name);
            contacUs.typeEmail(element.email);
            contacUs.typeSubject(element.subject);
            contacUs.typeMessage(element.message);
        });
    });
 
    And ('the user upload file', () => {
        contacUs.uploadFile('cypress/fixtures/example.json')
    });

    And ('clicks on the submit button', () => {
        contacUs.submitButton();
    });

    Then ('verify success message {string} is visible', (message) => {
        cy.contains(message);
    });

});
