Feature: Total for one frame
    This feature totals up the scores for one frame

Scenario: Basic frame scenario
    Given I am bowling
    When I knock down 2 pins on the first ball
    And 4 pins on the second ball
    Then the total will show 6