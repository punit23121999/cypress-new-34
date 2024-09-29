describe('', () => {
    
   it.skip('', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(2000)
    cy.xpath('//table[@name="courses"]//tr[10]//td[3]').each(($ele)=>{
        if($ele.text().includes('Bugzilla')){
            cy.wrap($ele).next().then((num) =>{
                cy.log(num.text())
            })
        }
    })

    
   });

   it('', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[value="radio1"]').click()
    
    

   });
    
});