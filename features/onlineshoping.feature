Feature: SignUp, SignIn and Purchase the Product

  Scenario: TC_001 create new user / SignUp
    Given I am on the home page
    Then Navigate to SignUp page
    And create an account with random username
    # verifying the title of the webpage
    And verify the page title "dash board" of the webpage
