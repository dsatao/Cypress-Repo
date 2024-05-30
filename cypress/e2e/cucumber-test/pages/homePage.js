const { Given, When, Then} = require("cypress-cucumber-preprocessor/steps")

Given('User is at the amazon home page', function ()  {
    cy.visit('https://www.amazon.com')
})

When('User enters searchText as {string} in seachbox', function (searchText)  {
    cy.get('#twotabsearchtextbox').type(searchText)
})

And('User clicks on search button', function ()  {
    cy.get('#nav-search-submit-button').click()
})

Then('User is able to successfully result page', function ()  {
    cy.get('.a-price-whole').should('be.visible', {timeout: 10000})
})