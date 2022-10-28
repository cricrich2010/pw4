describe('red victory', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    //start party
    //yellow turn
    cy.get('div.playerYello > .victories').should("exist")
    //yellow play
    cy.get('[data-playecolumn="0"]').click()
    //red turn
    cy.get('div.playerRed > .victories').should("exist")
    //red play
    cy.get('[data-playecolumn="0"]').click()
    //yellox turn
    cy.get('div.playerYello > .victories').should("exist")
    //yellow play
    cy.get('[data-playecolumn="0"]').click()
    //red turn
    cy.get('div.playerRed > .victories').should("exist")

  })
})



