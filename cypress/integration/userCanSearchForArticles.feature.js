describe('User can search for articles', () => {
  it('by typing in ssearch query in header field', () => {
    cy.server()
    cy.route('GET', 'https://newsapi.org/v2/everything**', 'fx:search_results.json')
    cy.visit('/')
    cy.get('[data-cy="search"]').type('Sweden')
    cy.get('[data-cy="search-button"]').click()
    cy.get("[data-cy='news-display']").as('list')

    cy.get('@list').children()
      .should('have.length', 20)
    cy.get('@list').children()
      .first().should('contain', "Sweden Rocks!")

  });
});