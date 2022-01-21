Feature: Booking

  Scenario Outline: As a user, I can booking Kos in Duo Tenan Rent for 2 Months

    Given I am on the login page
    When I login with <username> and <password>
    And I am on the Duo Tenan page
    And I Apply for Rent for 2 Months
    Then I should waiting for owner reply

    Examples:
      | username     | password    |  chat        |
      | 081311683238 | Vel@2       |  halo        |


  