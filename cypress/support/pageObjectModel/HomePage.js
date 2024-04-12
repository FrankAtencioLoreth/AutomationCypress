class HomePage {

    //Constructor

    get = {
        endpoint: () => cy.visit('/'),
        userName: () => cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a').should('be.visible'),
        logout: () => cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible')
    }

    //Methods & functions
    clickLogout() {
        this.get.logout().click();
    }
}

export const home = new HomePage();