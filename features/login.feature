Feature: Login

  Scenario Outline: As a user, I can log into Mamikos Homepage

    Given I am on the login page
    When I login with <username> and <password>
    Then I should waiting for owner reply

    Examples:
      | username     | password             | 
      | 081284774512 | Vel@2021             | 
  
  
