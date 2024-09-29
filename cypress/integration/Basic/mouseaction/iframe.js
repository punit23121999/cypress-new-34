

describe('', () => {
    it('', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('[id="courses-iframe"]')
        cy.frameLoaded().contains('Learning paths').click()
        
    });
    it('', () => {
        cy.visit('https://v1.training-support.net/selenium/iframes')
       // cy.frameLoaded('[src="/selenium/frame1"]')

        cy.iframe('[src="/selenium/frame1"]').find('[onclick="action()"]').first().click()

     
        
    });
    
    it('', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('[id="file-upload"]').selectFile('C:/Users/puneet kumar/OneDrive/Desktop')

        cy.get('[id="file-submit"]').click()
        
    });

    it.only('', () => {
        cy.visit('https://www.google.com/')

        cy.get('[id="APjFqb"]').type('masai{enter}')

        cy.scrollTo(0,1000)// for y down

        cy.scrollTo(0,-1000)//for y up

        cy.scrollTo(500,0)// for x right
        
        cy.scrollTo(500,0)//for y left

       

        cy.contains('Maasai people').scrollIntoView().click()// direct visit the pagen 
    });
});