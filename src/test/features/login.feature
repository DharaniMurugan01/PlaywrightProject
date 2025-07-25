Feature: User Authentication Tests
Background:
    Given the user navigates to the application
    And the user clicks login button

Scenario: Login should be success
    Given the user enter the username as "D1"
    And the user enter the password as "Dharani@123"
    When the user click on the login button
    Then the login should be success

Scenario: Login should not be success
    Given the user enter the username as "D2"
    And the user enter the password as ""
    When the user click on the login button
    Then the login should fails