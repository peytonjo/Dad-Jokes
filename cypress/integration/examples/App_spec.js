describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("should render the navbar and a random joke on pageload", () => {
    cy.get('nav')
    cy.get('.joke-card').should('not.contain', 'Couldn\'t reach the jokes compendium, try again later')
  })

  it("should display the input form when the Add New Joke button is clicked", () => {
    cy.get('button').contains('Add new joke').click()
    cy.get('textarea')
  })

  it("should display add new joke button in nav bar", () => {
    cy.contains('Add new joke')
  })

  it("should display user page view button in nav bar", () => {
    cy.get('.user-icon')
  })

  it("should only display the Return To Home button when not on the home page", () => {
    cy.get('.user-icon').click()
    cy.get('button').contains('Return to Home')
      .click()
    cy.get('button').contains('Return to Home').should('not.exist')

  })

  it("should route home again when the home button is clicked", () => {
    cy.get('button').contains('Add new joke').click()
    cy.get('button').contains('Return to Home').click()
    cy.get('button').contains('Next')
  })

  it('should be able to add a custom joke and see it on the user page', () => {
    cy.get('button').contains('Add new joke').click()

    cy.get('textarea').type('Yo mamma')

    cy.get('button').contains('Submit').click()

    cy.get('.user-icon').click()

    cy.contains('Yo mamma')
  });

  it('should be able to favorite a random joke and see it on the user page', () => {
    cy.get('.add-favorite').click()

    cy.get('.user-icon').click()

    cy.get('.created-joke-card')
  })

  it('should be able to create and display multiple custom jokes', () => {
    cy.get('button').contains('Add new joke').click()

    cy.get('textarea').type('Yo mamma')
    cy.get('button').contains('Submit').click()

    cy.get('textarea').type('Yo mamma the second')
    cy.get('button').contains('Submit').click()

    cy.get('textarea').type('Yo mamma the third')
    cy.get('button').contains('Submit').click()

    cy.get('.user-icon').click()

    cy.contains('Yo mamma')
    cy.contains('Yo mamma the second')
    cy.contains('Yo mamma the third')
  })
})