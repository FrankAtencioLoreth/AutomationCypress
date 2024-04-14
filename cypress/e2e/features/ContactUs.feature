Feature: Contact Us

User Story: Contact Us Automation Test

As a customer,
I want an automated test of the contact us process
to ensure system functionality

@TCCU001
Scenario: Contact us form
    Given the user is on the contact us form page
    When the user fill the contact form
    |name|email        |subject     |message    |
    |Test|test@test.com|Test subject|Lorem ipsum|
    And the user upload file
    And clicks on the submit button
    Then verify success message "Success! Your details have been submitted successfully." is visible