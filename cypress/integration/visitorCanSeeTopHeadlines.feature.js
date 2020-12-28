describe('on homepage user can see...', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=API_KEY',
      response: 'fixtures: news_index.json'
    })
    cy.visit('/')
  })
  
  it('can see list of top headlines', () => {
    cy.get("[data-cy='header']").contains('News Wire Network');
    cy.get("[data-cy='news-card']").within(() => {
      cy.get("[data-cy='card-title']").should('contain', "How Do Bitcoin Transactions Work?");
      cy.get("[data-cy='card-description']").should('contain', "Bitcoin works as an investment");

    });
  });


});