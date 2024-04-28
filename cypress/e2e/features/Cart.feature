Feature: Cart

User Story: Cart Automation Test

As a customer,
I want an automated test of the cart process
to ensure system functionality

Background:
    Given the user is on the login page
    When the user enters valid credentials
    |email                 |password      |
    |automation@testing.com|automation123.|
    And clicks the login button
    Then the user should be redirected to the home
    And a valid session should be created
    Given the user is on the products page
    And the products list is visible
    And clicks on view product
    When the user is landed to product detail page

Scenario: Add Products in Cart
    And click Add to cart
    And click on view cart
    Then I see the cart
    And click on proceed to checkout
    And I see address details section
    And click on order button
    And I see payment section
    Then fill payment form
        |nameCard  |cardNumber|cvc|expMonth|expYear|
        |MasterCard|1234567890|191|04      |2027   |
    And click on payment button
    And I see the successfully message "Congratulations! Your order has been confirmed!"

   