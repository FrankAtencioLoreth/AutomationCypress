const {Given, When, And, Then} = require('cypress-cucumber-preprocessor/steps');
const {productPage} = require('../../support/pageObjectModel/ProductPage');
const {products, productDetail} = Cypress.env('endpoints');

beforeEach(() => {

    cy.log('Started test');
    cy.log(`Endpoint ${products}`);

    Given ('the user is on the products page', () => {
        cy.visit(products);
        cy.url().should('contains', '/products');
    });

});

describe('Verify All Products and product detail page', () => {

    And ('the products list is visible', () => {
        productPage.get.productList().should('have.length.greaterThan', 0);
    });

    And ('clicks on view product', () => {
        productPage.clickViewProduct();
    });

    When ('the user is landed to product detail page', () => {
        cy.url().should('contains', productDetail)
    });

    Then ('verify that detail detail is visible', (dataTable) => {
        dataTable.hashes().forEach(item => {
            productPage.get.productName().should('have.text', item.product);
            productPage.get.category().should('have.text', item.category);
            productPage.get.price().should('have.text', item.price);
            productPage.get.availability().should('have.text', item.avaliability);
            productPage.get.condition().should('have.text', item.condition);
            productPage.get.brand().should('have.text', item.brand);
        });
    });

});

describe('Search product', () => {

    let nameProduct;

    When ('enter product name in search input and click search button', (dataTable) => {
        dataTable.hashes().forEach(item => {
            nameProduct = item.product;
            productPage.searchProduct(nameProduct);
            cy.wait(1000);
            productPage.get.searchProductName().should('have.text', nameProduct);
        });
    });

});

after(() => {
    cy.log('Finished test');
});