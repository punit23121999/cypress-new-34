class searchs{

    searchbox(){
        cy.get('[placeholder="Search"]').type('buzz')
        cy.contains('Buzz').click()
    }
}

export default searchs;