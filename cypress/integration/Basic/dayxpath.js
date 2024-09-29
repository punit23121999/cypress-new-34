describe('', () => {
    it('', () => {

    cy.visit('https://v1.training-support.net/selenium/simple-form')

    cy.get('#firstName').type('punit')

    cy.get('#lastName').type('kumar')

    cy.get('#email').type('punit@gamil.com')

    cy.get('[placeholder="9876543210"]').type('770000890')

    cy.get('[rows="2"]').type('happy teacher day sir')

   

    cy.get('input[type="submit"][class="ui green button"]').click()
        
    });

    it('', () => {

        cy.visit('https://v1.training-support.net/selenium/simple-form')

        cy.url().should('include', 'selenium' )


       cy.title().should('include','Simple Form')



          // see form to the visible

        cy.xpath('//*[@class="content"]').should('be.visible')

        cy.xpath('//*[@placeholder="First Name"]').should('have.attr', 'placeholder','First Name').and('have.attr','id')
        

        cy.xpath('//*[@placeholder="First Name"]').should('have.id','firstName').type('punit').should('have.value','punit').should('have.attr', 'placeholder')

        cy.xpath('//*[@placeholder="Last Name"]').type('kumar').should('have.value','kumar')

        cy.xpath('//*[@type="email"]').type('punit@gmail.com').should('have.value','punit@gmail.com')

        cy.xpath('//*[@type="tel"]').type("1234567898").should('have.value','1234567898')

        cy.xpath('(//*[@class="ui green button"])[1]').click()
        
    });

    it('', () => {

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        cy.url().should('include','contact')

        cy.title().should('include','Contact Us')

        cy.xpath('(//a[@href="https://automationteststore.com/index.php?rt=content/contact"])[2]').click()

        cy.xpath('//input[@id="ContactUsFrm_first_name"]').type('punitkumar')

        
        cy.get('#ContactUsFrm_email').type('punit@gamil.com')
        cy.get('#ContactUsFrm_enquiry').type('nothing')
        cy.xpath('//i[@class="fa fa-check"]').click()
    });
});