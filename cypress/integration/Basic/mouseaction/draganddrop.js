describe('', () => {
    it('', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop')

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true})



        
    });
});