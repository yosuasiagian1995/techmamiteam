Feature: Login

  Scenario Outline: As a user, I can log into Mamikos Homepage

    Given I am on the login page
    When I login with <username> and <password>
    Then I will see pop up Nomor dan password tidak sesuai

    Examples:
      | username     | password          | 
      | 081000000    | Vhehahe2@         | 
  
  
