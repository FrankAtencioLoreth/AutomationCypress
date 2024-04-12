Feature: Login

User Story: Login Automation Test

As a customer,
I want an automated test of the login process
to ensure system functionality and security

@TCLG001
Scenario: Login User with correct email and password
    Given the user is on the login page
    When the user enters valid credentials
    |email                 |password      |
    |automation@testing.com|automation123.|
    And clicks the login button
    Then the user should be redirected to the home
    And a valid session should be created

@TCLG002
Scenario: Login User with incorrect email and password
    Given the user is on the login page
    When the user enters invalid credentials
    |email                 |password      |
    |automation@testcas.com|automation123.|
    And clicks the login button
    Then an error message should be displayed "Your email or password is incorrect!"
    And the user should remain on the login page

@TCLG003
Scenario: Successful Logout
    Given the user is on the login page
    When the user enters valid credentials
    |email                 |password      |
    |automation@testing.com|automation123.|
    And clicks the login button
    Then the user should be redirected to the home
    And clicks the logout button
    Then the user should be redirected to the login page

