describe('red victory', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .victories').contains("Victory: 0").should("exist")
    cy.get('[data-playecolumn="0"]').click()
    cy.get('[data-playecolumn="3"]').click()
    cy.get('[data-playecolumn="1"]').click()
    cy.get('[data-playecolumn="3"]').click()
    cy.get('[data-playecolumn="2"]').click()
    cy.get('[data-playecolumn="3"]').click()
    cy.get('[data-playecolumn="4"]').click()
    cy.get('[data-playecolumn="3"]').click()
    //Player remains Red
    cy.get('div.playerRed > .victories').should("exist")
    cy.get('#gameMessages > p').contains("Red player Win").should("exist")
    //extra click should not add new token
    cy.get('[data-playecolumn="3"]').click()
    cy.get(':nth-child(2) > :nth-child(4) > .noToken').should("exist")
    //player counter is incremented
    cy.get(':nth-child(1) > .victories').contains("Victory: 1").should("exist")

  })
})