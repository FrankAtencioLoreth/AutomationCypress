///<reference types='cypress'/>
///<reference types='cypress-xpath'/>

class LoginPage {

    //Constructor

    get = {
        endpoint: () => cy.visit('/login'),
        emailInput: () => cy.get('[name="email"]').eq(0).should('be.visible'), 
        passwordInput: () => cy.get('input[type="password"]').should('be.visible'),
        loginButton: () => cy.get('button[type="submit"]').eq(0).should('be.visible'),
        errorLoginMessage: () => cy.get('.login-form > form > p').should('be.visible'),
        nameInput: () => cy.get('[name="name"]').should('be.visible'),
        emailRegisterInput: () => cy.get('[name="email"]').eq(1).should('be.visible')
    }

    //Methods & functions

    /**
     * Method that allows you to write the email
     * @param {string} data 
     */
    typeEmail(data) {
        this.get.emailInput().type(data);
    }

    /**
     * Method that allows you to write the password
     * @param {string} data 
     */
    typePassword(data) {
        this.get.passwordInput().type(data);
    }

    /**
     * Method that allows you to click on submit button
     */
    clickSubmit() {
        this.get.loginButton().click();
    }

}

export const login = new LoginPage();