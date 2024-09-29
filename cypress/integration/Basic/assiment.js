describe('', () => {
    it('', () => {
        cy.visit('https://books.toscrape.com/')
        cy.title().should('include',' Books to Scrape - Sandbox')
        cy.xpath('//a[contains(text(),"Nonfiction")]').click()
        cy.xpath('(//*[@class="btn btn-primary btn-block"])[2]').click()
        
    });
});