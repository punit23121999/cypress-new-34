describe('', () => {
    it('', () => {
        var name = 'ganesh'
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="name"]').type(name)
        cy.get('#alertbtn').click()
        

        cy.on('window:alert',(text) =>{
            expect(text).to.contains(name)


      // cy.get('').click()

        cy.on('window:confirm',(alert2)=>{

            expect(alert00).to.contains()
        })


        })
        
    });
});