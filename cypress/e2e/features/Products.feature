Feature: Products

User Story: Products Automation Test

As a customer,
I want an automated test of the products section
to ensure system functionality

@TCPR001
Scenario: Verify All Products and product detail page
    Given the user is on the products page
    And the products list is visible
    And clicks on view product
    When the user is landed to product detail page
    Then verify that detail detail is visible
    |product |category              |price  |avaliability          |condition     |brand      |
    |Blue Top|Category: Women > Tops|Rs. 500|Availability: In Stock|Condition: New|Brand: Polo|

@TCPR002
Scenario: Search product
    Given the user is on the products page
    And the products list is visible
    When enter product name in search input and click search button
    |product |
    |Blue Top|
    |Men Tshirt|
    |Sleeveless Dress|