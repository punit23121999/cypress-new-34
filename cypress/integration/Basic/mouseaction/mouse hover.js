describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    });

    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Reload').click({force:true})
        cy.url().should('include','AutomationPractice')
        
        
    });
});