Feature: Register

User Story: Register Automation Test

As a customer,
I want an automated test of the register process
to ensure system functionality

@TCRE001
Scenario: Register successfully
    Given the user is on the login page
    When the user enters email and name
    And the user clicks on sign up button
    And the user is redirected to sign up page
    Then the user fill account information
    |name|password      |day|month|year|firstName|lastName|company|address    |country  |state          |city    |zipcode|cellPhone|
    |Test|automation123.|16 |April|1998|Test     |Test    |CTBX   |ST Wallapop|Australia|South Australia|Camberra|987654 |322898798|
    And clicks on create account
    Then the user has been registered with the message "ACCOUNT CREATED!"

@TCRE002
Scenario: Register user with existing email
    Given the user is on the login page
    When the user enters a exsiting email
    |email                 |
    |automation@testing.com|
    And the user clicks on sign up button
    Then an error message should be displayed for a existing email "Email Address already exist!"