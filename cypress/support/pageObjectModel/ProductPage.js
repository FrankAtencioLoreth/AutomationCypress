class ProductPage {

    //Constructor

    get = {
        productList: () => cy.get('.features_items > .col-sm-4').should('be.visible'),
        searProductInput: () => cy.get('#search_product').should('be.visible'),
        searchButton: () => cy.get('#submit_search').should('be.visible'),
        viewProductLink: () => cy.get('.choose > ul > li > a').eq(0).should('be.visible'),
        productName: () => cy.get('.product-information > h2').should('be.visible'),
        category: () => cy.get('.product-information > p').eq(0).should('be.visible'),
        price: () => cy.get('.product-information > span > span').should('be.visible'),
        availability: () => cy.get('.product-information > p').eq(1).should('be.visible'),
        condition: () => cy.get('.product-information > p').eq(2).should('be.visible'),
        brand: () => cy.get('.product-information > p').eq(3).should('be.visible'),
        searchProductName: () => cy.get('.productinfo > p'),
        addToCartButton: () => cy.get('.product-information > span > button'),
        ViewCart: () => cy.get('#cartModal > div > div > div.modal-body > p:nth-child(2) > a')
    }

    //Methods & functions

    clickViewProduct() {
        this.get.viewProductLink().click({force: true});
    }

    searchProduct(data) {
        this.get.searProductInput().clear().type(data);
        this.get.searchButton().click();
    }

    clickToAddProductToCart() {
        this.get.addToCartButton().click({force: true});
    }

    clickToViewCart() {
        this.get.ViewCart().click();
    }
    
}

export const productPage = new ProductPage();
