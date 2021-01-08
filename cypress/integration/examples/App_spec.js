describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("add new joke button should display in nav bar", () => {
    cy.contains('Add new joke')
  })

  it("user page view button should display in nav bar", () => {
    cy.get('.nav-bar')
  })

  it('should render users favorited jokes when clicked', () => {
    cy.get('[href="/user-view"] > button').click()
    cy.url().should('include', 'user-view')
  });

  it('should render users created jokes when clicked', () => {
    cy.get('[href="/user-view"] > button').click()
    cy.get('.users-jokes > .joke-card')
  });

})