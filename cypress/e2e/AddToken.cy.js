describe('Players add tokens', () => {
  it('Proper to tokken is add each time a player slect a column, and no unexpected changed append in the token view', () => {
    cy.visit('http://localhost:3000')

    //proper token is add 
    //address system in use is sensitiv to the dom structur.
    //Hence more relable id and classe name should be used.
    cy.get('[data-playecolumn="0"]').click()
    cy.get(':nth-child(6)  > :nth-child(1) > .yelloToken').should("exist")
    cy.get('[data-playecolumn="1"]').click()
    cy.get(':nth-child(6)  > :nth-child(2) > .redToken').should("exist")
    cy.get('[data-playecolumn="2"]').click()
    cy.get(':nth-child(6)  > :nth-child(3) > .yelloToken').should("exist")
    cy.get('[data-playecolumn="3"]').click()
    cy.get(':nth-child(6)  > :nth-child(4) > .redToken').should("exist")
    cy.get('[data-playecolumn="4"]').click()
    cy.get(':nth-child(6)  > :nth-child(5) > .yelloToken').should("exist")

    cy.get('[data-playecolumn="0"]').click()
    cy.get(':nth-child(5)  > :nth-child(1) > .redToken').should("exist")
    cy.get('[data-playecolumn="1"]').click()
    cy.get(':nth-child(5)  > :nth-child(2) > .yelloToken').should("exist")
    cy.get('[data-playecolumn="2"]').click()
    cy.get(':nth-child(5)  > :nth-child(3) > .redToken').should("exist")
    cy.get('[data-playecolumn="3"]').click()
    cy.get(':nth-child(5)  > :nth-child(4) > .yelloToken').should("exist")
    cy.get('[data-playecolumn="4"]').click()
    cy.get(':nth-child(5)  > :nth-child(5) > .redToken').should("exist")
    //nothing weird elsewher
    cy.get(':nth-child(4)  > :nth-child(1) > .noToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(2) > .noToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(3) > .noToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(4) > .noToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(5) > .noToken').should("exist")

    cy.get('[data-playecolumn="0"]').click()
    cy.get(':nth-child(4)  > :nth-child(1) > .yelloToken').should("exist")
    cy.get('[data-playecolumn="1"]').click()
    cy.get(':nth-child(4)  > :nth-child(2) > .redToken').should("exist")
    cy.get('[data-playecolumn="2"]').click()
    cy.get(':nth-child(4)  > :nth-child(3) > .yelloToken').should("exist")
    cy.get('[data-playecolumn="3"]').click()
    cy.get(':nth-child(4)  > :nth-child(4) > .redToken').should("exist")
    cy.get('[data-playecolumn="4"]').click()
    cy.get(':nth-child(4)  > :nth-child(5) > .yelloToken').should("exist")
    //no unexpected changes in previouse status
    cy.get(':nth-child(6)  > :nth-child(1) > .yelloToken').should("exist")
    cy.get(':nth-child(6)  > :nth-child(2) > .redToken').should("exist")
    cy.get(':nth-child(6)  > :nth-child(3) > .yelloToken').should("exist")
    cy.get(':nth-child(6)  > :nth-child(4) > .redToken').should("exist")
    cy.get(':nth-child(6)  > :nth-child(5) > .yelloToken').should("exist")

    cy.get(':nth-child(5)  > :nth-child(1) > .redToken').should("exist")
    cy.get(':nth-child(5)  > :nth-child(2) > .yelloToken').should("exist")
    cy.get(':nth-child(5)  > :nth-child(3) > .redToken').should("exist")
    cy.get(':nth-child(5)  > :nth-child(4) > .yelloToken').should("exist")
    cy.get(':nth-child(5)  > :nth-child(5) > .redToken').should("exist")

    cy.get(':nth-child(4)  > :nth-child(1) > .yelloToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(2) > .redToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(3) > .yelloToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(4) > .redToken').should("exist")
    cy.get(':nth-child(4)  > :nth-child(5) > .yelloToken').should("exist")

    cy.get(':nth-child(3)  > :nth-child(1) > .noToken').should("exist")
    cy.get(':nth-child(3)  > :nth-child(2) > .noToken').should("exist")
    cy.get(':nth-child(3)  > :nth-child(3) > .noToken').should("exist")
    cy.get(':nth-child(3)  > :nth-child(4) > .noToken').should("exist")
    cy.get(':nth-child(3)  > :nth-child(5) > .noToken').should("exist")


  })
})