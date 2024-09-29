describe('', () => {
   beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').type('Admin');

    cy.get('[name="password"]').type('admin123');

    cy.get('[type="submit"]').click();


    
   });


    it('', () => {

        cy.contains('Admin').click() 
        cy.url().should('include','orangehrmlive.com')
        
    });

    it('', () => {

        
    cy.contains('Leave').click()

    cy.url().should('include','viewLeaveList')

        
    });

    afterEach(() => {


        cy.get('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
        cy.wait(2000)
         cy.xpath('(//a[@role="menuitem"])[4]').click()
      
        
     });
});