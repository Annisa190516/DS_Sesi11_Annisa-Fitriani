@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Annisa is on the login page
    When Annisa login with "standard_user" credential
    And Annisa should see home page