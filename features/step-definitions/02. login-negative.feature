@digital-skola @login
Feature: Swag Labs - Login - Negative

  @negative
  Scenario: As a locked_out_user, I should get error message
    Given Annisa is on the login page
    When Annisa login with "locked_out_user" credential
    Then Annisa should see error "Epic sadface: Sorry, this user has been locked out."