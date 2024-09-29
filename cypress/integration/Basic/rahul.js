describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[href="https://rahulshettyacademy.com/documents-request"]').click()

        cy.xpath('(//a[@class="new-navbar-highlighter"])[2]').click()

       cy.wait(1000)

        cy.go('back')

        cy.go('forward')

        cy.reload()

        
    });

   



});