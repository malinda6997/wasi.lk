describe('Register to wasi.lk', () => {
  it('passes', () => {
    cy.visit('https://www.wasi.lk/')

    //register to wasi.lk
    cy.get('[id="menu-extra-register"]').click()
    cy.get('a[href*="#"]').contains('Register').click()
    cy.get('[id="reg_username"]').type('malindaprabath876@gmail.com')
    cy.get('[id="reg_email"]').type('malindaprabath876@gmail.com')
    cy.get('[id="reg_password"]').type('malinda1234')
    cy.get('[name="register"]').click()

    
  })
})