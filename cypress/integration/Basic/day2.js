describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin');

        cy.get('[name="password"]').type('admin123');

        cy.get('[type="submit"]').click();

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        
    });

    it('facebook', () => {

        cy.visit('https://www.facebook.com/');

        cy.get('[name="email"]').type('punitnaagvanshi');

        cy.get('[data-testid="royal_pass"]').type('icanttellyou');

        cy.get('[type="submit"]').click();
        
    });

    it.only('', () => {

        cy.visit('https://www.flipkart.com/') 
        
        
        cy.xpath('//input[@placeholder="Search for Products, Brands and More"]').type('t-shirt')

        cy.xpath('(//*[@class="EwE-Fa"])[2]').click()
        
        
        
    });
});