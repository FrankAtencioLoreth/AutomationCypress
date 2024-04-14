class RegisterPage {

    //constructor

    get = {
        signUpButton: () => cy.get('[data-qa="signup-button"]').should('be.visible'),
        titleRdButton: () => cy.get('#id_gender1').should('be.visible'),
        nameInput: () => cy.get('[name="name"]').should('be.visible'),
        emailRegisterInput: () => cy.get('[name="email"]').eq(1).should('be.visible'),
        passwordInput: () => cy.get('#password').should('be.visible'),
        daySelect: () => cy.get('#days').should('be.visible'),
        monthSelect: () => cy.get('#months').should('be.visible'),
        yearSelect: () => cy.get('#years').should('be.visible'),
        firstNameInput: () => cy.get('#first_name').should('be.visible'),
        lastNameInput: () => cy.get('#last_name').should('be.visible'),
        companyInput: () => cy.get('#company').should('be.visible'),
        addressInput: () => cy.get('#address1').should('be.visible'),
        countrySelect: () => cy.get('#country').should('be.visible'),
        stateInput: () => cy.get('#state').should('be.visible'),
        cityInput: () => cy.get('#city').should('be.visible'),
        zipCodeInput: () => cy.get('#zipcode').should('be.visible'),
        mobileNumberInput: () => cy.get('#mobile_number').should('be.visible'),
        createAccountButton: () => cy.get('[data-qa="create-account"]').should('be.visible'),
        accounCreatedMessage: () => cy.xpath('//*[@id="form"]/div/div/div/h2')
    }

    //Methods & functions

    /**
     * ethod that allows you to click on title
     */
    clickTitle() {
        this.get.titleRdButton().click();
    }

    /**
     * Method that allows you to write an name
     * @param {string} data 
     */
    typeName(data) {
        this.get.nameInput().clear().type(data);
    }

    /**
     * Method that allows you to write the email
     * @param {string} data 
     */
    typeEmail(data) {
        this.get.emailRegisterInput().type(data);
    }

    /**
     * Method that allows you to write the email
     * @param {string} data 
     */
    clickSignUp() {
        this.get.signUpButton().click();
    }

    /**
     * Method that allows you to write the password
     * @param {string} data 
     */
    typePassword(data) {
        this.get.passwordInput().type(data);
    }

    /**
     * Method that allows you select day
     * @param {string} data 
     */
    selectDay(data) {
        this.get.daySelect().select(data).find(`option[value="${data}"]`).should('be.selected', data);
    }

    /**
     * Method that allows you select month
     * @param {string} data 
     */
    selectMonth(data) {
        this.get.monthSelect().select(data);
    }

    /**
     * Method that allows you select year
     * @param {string} data 
     */
    selectYear(data) {
        this.get.yearSelect().select(data).find(`option[value="${data}"]`).should('be.selected', data);
    }

    /**
     * Method that allows you to write firstname
     * @param {string} data 
     */
    typeFirstName(data) {
        this.get.firstNameInput().type(data);
    }

    /**
     * Method that allows you to write lastname
     * @param {string} data 
     */
    typeLastName(data) {
        this.get.lastNameInput().type(data);
    }

    /**
     * Method that allows you to write the company name
     * @param {string} data 
     */
    typeCompany(data) {
        this.get.companyInput().type(data);
    }

    /**
     * Method that allows you to write the address
     * @param {string} data 
     */
    typeAddress(data) {
        this.get.addressInput().type(data);
    }

    /**
     * Method that allows you select country
     * @param {string} data 
     */
    selectCountry(data) {
        this.get.countrySelect().select(data).should('have.value', data);
    }

    /**
     * Method that allows you to write the state/province
     * @param {string} data 
     */
    typeState(data) {
        this.get.stateInput().type(data);
    }

    /**
     * Method that allows you to write the city
     * @param {string} data 
     */
    typeCity(data) {
        this.get.cityInput().type(data);
    }

    /**
     * Method that allows you to write the zipcode
     * @param {string} data 
     */
    typeZipCode(data) {
        this.get.zipCodeInput().type(data);
    }

    /**
     * Method that allows you to write the number cellphone
     * @param {string} data 
     */
    typeMobileNumber(data) {
        this.get.mobileNumberInput().type(data);
    }

    /**
     * Method that allows you to click on create account button
     * @param {string} data 
     */
    clickCreateAccount() {
        this.get.createAccountButton().click();
    }

}

export const register = new RegisterPage();