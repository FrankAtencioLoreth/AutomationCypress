class ContacUsPage {

    //Constructor

    get = {
        nameInput: () => cy.get('[name="name"]').should('be.visible'),
        emailInput: () => cy.get('[name="email"]').should('be.visible'),
        subjectInput: () => cy.get('[name="subject"]').should('be.visible'),
        messageInput: () => cy.get('[name="message"]').should('be.visible'),
        uploadFileInput: () => cy.get('[name="upload_file"]').should('be.visible'),
        submitButton: () => cy.get('[name="submit"]').should('be.visible'),
        successMessage: () => cy.get('#contact-page > div.row > div.col-sm-8 > div > div.status.alert.alert-success')
    }

    //Methods & functions

    /**
     * Method that allows you to write the name
     * @param {string} data 
     */
    typeName(data) {
        this.get.nameInput().type(data);
    }

    /**
     * Method that allows you to write the email
     * @param {string} data 
     */
    typeEmail(data) {
        this.get.emailInput().type(data);
    }

    /**
     * Method that allows you to write the subject
     * @param {string} data 
     */
    typeSubject(data) {
        this.get.subjectInput().type(data);
    }

    /**
     * Method that allows you to write the message
     * @param {string} data 
     */
    typeMessage(data) {
        this.get.messageInput().type(data);
    }

    /**
     * Method that allows you to upload file
     * @param {string} data 
     */
    uploadFile(data) {
        this.get.uploadFileInput().selectFile(data);
    }

    /**
     * Method that allows you to click oon submit button
     * @param {string} data 
     */
    submitButton(data) {
        this.get.submitButton().click();
    }
}

export const contacUs = new ContacUsPage();