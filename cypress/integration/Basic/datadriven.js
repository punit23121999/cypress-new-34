const { it } = require("mocha");

describe('', () => {

    // before(() => {
    // cy.fixture('example.json').then((data)=>{
    //     globalThis.data = data
    // })
    // });




    // it('', () => {

    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //     cy.get('[placeholder="Username"]').type(data.name)
 
    //     cy.get('[placeholder="Password"]').type(data.email)
    //     cy.get('[type="submit"]').click()
        
    // });

   it('', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    cy.get("(//a[text()='Home'])[1]").click
    
   });
});