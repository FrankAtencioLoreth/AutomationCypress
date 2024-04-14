const {Given, When, And, Then, Before, After} = require('cypress-cucumber-preprocessor/steps');
const { login } = require('../../../support/pageObjectModel/LoginPage');
const { home } = require('../../../support/pageObjectModel/HomePage');
const { authentication, homepage } = Cypress.env('endpoints');

Before(() => {
    cy.log('Started test');
    cy.log(`Endpoint ${authentication}`);

    Given ('the user is on the login page', () => {
        cy.visit(authentication);
        cy.url().should('contains', authentication);
    });
});



describe('Login User with correct email and password', () => {

    let userName;

    When ('the user enters valid credentials', (dataTable) => {
        dataTable.hashes().forEach(element => {
            login.typeEmail(element.email);
            login.typePassword(element.password);
        });
    });
    
    And ('clicks the login button', () => {
        login.clickSubmit();
    });
    
    Then ('the user should be redirected to the home', () => {
        cy.url().should('contains', homepage);
    });
    
    And ('a valid session should be created', () => {
        home.get.userName()
        .then((element) => {
            userName = element.text().split(" ")[4];
            cy.log(`username = ${userName}`);
            home.get.userName().contains(`Logged in as ${userName}`);
        });
        
    }); 

});

describe('Login User with incorrect email and password', () => {

    When ('the user enters invalid credentials', (dataTable) => {
        dataTable.hashes().forEach(element => {
            login.typeEmail(element.email);
            login.typePassword(element.password);
        });
    });
    
    Then ('an error message should be displayed {string}', (message) => {
        login.get.errorLoginMessage().contains(message);
    });
    
    And ('the user should remain on the login page', () => {
        cy.url().should('contains', authentication);
    });

});

describe('Successful Logout', () => {
    And ('clicks the logout button', () => {
        home.clickLogout();
    });

    Then ('the user should be redirected to the login page', () => {
        cy.url().should('contains', authentication)
    });
});

After(() => {
    cy.log('Finished test');
});