Feature: MyAccount

@MyAccount @Desktop
Scenario: Change Personal information
    Given I am on the home page
    And I do login using email and password
    When i make a card data change
    Then the data is actualized correctly
    And i'm redirected to the my account page

