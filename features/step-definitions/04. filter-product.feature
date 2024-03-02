Feature: Product Filtering by Price Low to High
  Scenario: Annisa filters products by price low to high
    Given Annisa is on the login page
    When Annisa login with "standard_user" credential
    Then Annisa should see home page

   Given Annisa is on the home page
    When Annisa filters products by "Price (low to high)"
    Then Annisa should see the products sorted by "Price (low to high)"