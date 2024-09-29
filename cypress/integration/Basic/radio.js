describe('', () => {
    it.only('', () => {

       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       cy.get('[value="radio1"]').should('not.be.checked').click().should('be.checked')

       cy.get('[value="radio2"]').should('not.be.checked').check().should('be.checked')

       cy.get('[value="radio3"]').check().should('be.checked')

      // cy.wait('10000')

       cy.get('#dropdown-class-example').should('be.visible').select('option1')

       cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

       cy.get('#dropdown-class-example').select('option3').should('have.value','option3')


       cy.get('#dropdown-class-example').select('').should('have.value','')

       cy.get('#dropdown-class-example').select('Option1').should('include.text','Option1')


       cy.get('#dropdown-class-example').select('Option2').should('include.text','Option2')

       cy.get('#dropdown-class-example').select('Option3').should('include.text','Option3')
       cy.wait(6000)
       cy.get('#dropdown-class-example').select('Select').should('include.text','Select')


       cy.get('#dropdown-class-example').select(0).should('include.text','')


       cy.get('#dropdown-class-example').select(1).should('include.text','Option1')

       cy.get('#dropdown-class-example').select(2).should('include.text','Option2')
       cy.wait(6000)
       cy.get('#dropdown-class-example').select(3).should('include.text','Option3')
});

it('', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('[placeholder="Type to Select Countries"]').type('ind')

    cy.get('#ui-id-1').find('[class="ui-menu-item"]').each(($ele) =>{


        if($ele.text() =='India'){
            cy.wrap($ele).click()
        }
    })

  // cy.wait(6000)
    cy.get('[placeholder="Type to Select Countries"]').type('aus')
    
    cy.get('[class="ui-menu-item"]').each(($ele) =>{


        if($ele.text() =='Australia'){
            cy.wrap($ele).click()
        }
    })


    cy.get('[placeholder="Type to Select Countries"]').clear().type('ch')

    cy.get('[class="ui-menu-item"]').contains('China').click()



    
    
});



});