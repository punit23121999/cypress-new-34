describe('', () => {
    it('', () => {


        cy.visit('https://www.flipkart.com/') 
        
        
       cy.xpath('//input[@placeholder="Search for Products, Brands and More"]').type('t-shirt'); 

      
        
        
        
    });

    it('', () => {

        cy.visit('https://www.youtube.com/')

        cy.get('form.ytd-searchbox').type('lofi songs')

        cy.get('[id="search-icon-legacy"]').click()


        
    });
    it.only('', () => {
        
        cy.visit('https://books.toscrape.com/')
        cy.title().should('include',' Books to Scrape - Sandbox')
        cy.xpath('//a[contains(text(),"Nonfiction")]').click()
        cy.xpath('(//*[@class="btn btn-primary btn-block"])[2]').click()

    });
});

    