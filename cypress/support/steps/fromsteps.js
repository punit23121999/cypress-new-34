import {before,Given,When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('open browser enter Simple Form url', () => {
    cy.visit("https://v1.training-support.net/selenium/simple-form")
})

When('enter first name', () => {
    cy.get("#firstName").type("Mohit")
})

And('enter last name', () => {
    cy.get("#lastName").type("Gupta")
})

And('enter email', () => {
    cy.get("#email").type("mohit@gmail.com")
})

And('enter contact number', () => {
    cy.get("#number").type("7028499422")
})

And('enter message', () => {
    cy.get('[onclick="simpleFormSubmit()"]').type("Hello World")
})

And('click on submit button', () => {
    cy.get('[value="submit"]').click()
})

Then('successfully alert should be display with name and last name and message of thank you', () => {
    cy.on('window:alert', (text) => {

        expect(text).to.contains('Thank You for reaching out to us, Mohit Gupta');
        
    })
    
})

