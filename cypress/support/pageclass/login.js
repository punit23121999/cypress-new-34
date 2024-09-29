class loginpage{
    Enterurl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }

    login(){
       
    cy.get('[name="username"]').type('Admin');

    cy.get('[name="password"]').type('admin123');

    cy.get('[type="submit"]').click();
    }

    forgotpassword(){
        cy.get('.orangehrm-login-forgot').click()
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="submit"]').click()
    }
}

export default loginpage;