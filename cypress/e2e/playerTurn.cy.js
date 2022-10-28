describe('Game toggle between player', () => {
  it('Game toggle between player', () => {
    cy.visit('http://localhost:3000')
    //start party
    //yellow turn
    cy.get('div.playerYello').should("exist")
    //yellow play
    cy.get('[data-playecolumn="0"]').click()
    //red turn
    cy.get('div.playerRed').should("exist")
    //red play
    cy.get('[data-playecolumn="0"]').click()
    //yellox turn
    cy.get('div.playerYello').should("exist")
    //yellow play
    cy.get('[data-playecolumn="0"]').click()
    //red turn
    cy.get('div.playerRed').should("exist")

  })
})



