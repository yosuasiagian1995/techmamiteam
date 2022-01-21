Feature: Login

  Scenario Outline: As a user, I can log into Mamikos Homepage

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username     | password             | message                  |
      | 081284774512 | Vel@2021             | You logged into a Mamikos|
  
  
