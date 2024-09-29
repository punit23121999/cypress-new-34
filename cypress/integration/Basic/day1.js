describe('', () => {
    it('', () => {
        cy.visit('https://www.google.com/');
    });
    it('', () => {
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('#username').type('tomsmith');

        cy.get('#password').type('SuperSecretPassword!');

        cy.get('.radius').click();
        
    });
});