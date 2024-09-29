describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.xpath('//table[@name="courses"]//tr[10]//td[3]').then(($ele)=>{
            cy.log($ele.text());
            var ele2 = $ele.text()
        })
        
    });



   it('', () => {
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

   it.only('', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get('[id="opentab"][class="btn-style class1 class2"]').click()

    cy.get('[id="opentab"][class="btn-style class1 class2"]').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com', () => {
        cy.contains('Courses').click();
    });

    cy.log(cy.url())
    
   });

   it('', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('[id="openwindow"]').invoke('removeAttr','opentab').click()
    
   });

});
