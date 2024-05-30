Feature: Home Page Search

    Scenario Outline: Search on amazon website

        Given User is at the amazon home page
        When User enters searchText as '<searchText>' in seachbox
        And User clicks on search button
        Then User is able to successfully result page
        Examples:
            | searchText | 
            | Mens Watch | 
            | Mens Jeans |