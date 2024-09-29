describe('', () => {
    it('', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.iframe('[id="courses-iframe"]').contains('Job Support').click()
        
    });
});