describe('Visitor can see a set of Headline news', () => {
  it('when visiting the application', () => {
    cy.server()
    cy.route('GET', "https://newsapi.org/v2/top-headlines?country=us**", 'fx:news_index.json')
    cy.visit('/')
    cy.get("[data-cy='news-display']").children().should('have.length', 20)
  });
});