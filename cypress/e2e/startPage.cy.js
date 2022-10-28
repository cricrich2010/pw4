describe('start page', () => {
  it('start page', () => {

    cy.visit('http://localhost:3000')
    cy.get('#gameMessages > p').contains("New Game").should("exist")

  })
})