Feature: Test flow login and pelanggan at "kasirAja"

  Background: 
    Given I am on the login page

  Scenario: User can't login using wrong password
    When I input email as "<email>" and password as "<password>"
    And I click login button
    Then I still on login page and see error message '<errorMessageLogin>'

    Examples: 
      | email                 | password   | errorMessageLogin                    |
      | davagaluh22@gmail.com | tokobesok  | Kredensial yang Anda berikan salah   |

Scenario: User can login using valid data
    When I input email as "<email>" and password as "<password>"
    And I click login button
    Then I must directed to dashboard page

    Examples: 
      | email                 | password     | 
      | davagaluh22@gmail.com | tokohariini  | 

  Scenario: User can add user with valid data
    Given I am on the dashboard page
    And I click pengguna on the sidebar
    And I click button tambah
    And I fill name as "<name>" and email as "<email>" and password as "<password>"
    When I click button simpan
    Then I see a success message

    Examples:
     | name     | email             | password    |
     | user 1   | user1@kasir.com   | 1234        |

  Scenario: User can't add user without fill password
    Given I am on the dashboard page
    And I click pengguna on the sidebar
    And I click button tambah
    And I fill name as "<name>" and email as "<email>" and password as "<password>"
    When I click button simpan
    Then I cant add user and see error message '<errorMessageUser>'

    Examples:
     | name    | email           | password | errorMessageUser                      |
     | user 2  | user2@kasir.com |          | "password" is not allowed to be empty |