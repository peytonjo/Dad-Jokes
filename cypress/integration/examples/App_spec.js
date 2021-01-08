describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("Should exist!", () => {
    cy.contains('Add new joke').click()
    cy.url().should('include', 'form-view')
  })
})