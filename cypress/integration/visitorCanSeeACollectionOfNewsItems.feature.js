describe('Visitor can see a set of Headline news', () => {
  it('when visiting the application', () => {
    cy.visit('/')
    cy.get("[data-cy='news-display']").children().should('have.length', 20)
  });
});