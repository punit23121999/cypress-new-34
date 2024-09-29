describe('', () => {
    it('', () => {


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').then(($username)=>{expect($username).to.have.attr('name','username')
        cy.wrap($username).type('Admin')
         })

         cy.get('[placeholder="Password"]').then(($password)=>{
            expect($password).to.have.attr('name','password')
            cy.wrap($password).type('admin123')

         })

         cy.get('.oxd-button').then(($login) => {
            expect($login).to.have.text(' Login ')
            cy.wrap($login).click()
          })
         
          cy.get('.oxd-userdropdown-name').click()
        cy.get('.oxd-userdropdown-name').find('[role="menu"]').each(($ele)=>{
            if($ele.text()=='Logout'){
               cy.wrap($ele).click()
            }
        })

    });

    it('', () => {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

     
       cy.get('#checkBoxOption1').check().should('be.checked')
       cy.get('#checkBoxOption2').check().should('be.checked')
       cy.get('#checkBoxOption3').check().should('be.checked')

       cy.get('#checkBoxOption1').uncheck().should('be.not.checked')
       cy.get('#checkBoxOption2').uncheck().should('be.not.checked')
       cy.get('#checkBoxOption3').uncheck().should('be.not.checked')


      
    });
    it.only('hide and show', () => {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      cy.get('[placeholder="Hide/Show Example"]').should('be.visible')

      cy.get('#hide-textbox').click()

      cy.get('#show-textbox').click()

      cy.get('[placeholder="Hide/Show Example"]').type('punit')
      
    });
});