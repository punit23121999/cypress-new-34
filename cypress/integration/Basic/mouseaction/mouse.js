describe('', () => {
    it('', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('//span[contains(text(),"right click me")]').rightclick()//.contains('Quit').click()

        cy.contains('Quit').click()
        cy.wait(2000)

        cy.get('[ondblclick="myFunction()"]').dblclick()

        
    });
});