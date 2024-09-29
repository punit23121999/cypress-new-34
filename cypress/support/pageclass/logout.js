class logouts{
   

    logout(){
        cy.get('.oxd-userdropdown-tab').click()

        cy.get('.oxd-userdropdown-tab').find('.oxd-userdropdown-tab').each(($ele)=>{
            if($ele.text()=='Logout'){
                cy.wrap($ele).click()
            }
        })

    }

   
}
export default logouts