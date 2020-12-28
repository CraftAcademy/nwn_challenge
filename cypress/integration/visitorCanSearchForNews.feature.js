/* eslint-disable no-undef */
describe('Visitor', () => {
  describe('can', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url:
          'http://newsapi.org/v2/everything?q=covid19&from=2020-12-27&sortBy=popularity&language=en&apiKey=*',
        response: 'fixture:news_search_for_covid.json',
      });
      cy.visit('/');
    });

    it('search for news that interests him/her and see the search results', () => {
      cy.get('[data-cy="search-results"]').within(() => {
        cy.contains(
          'European Union Officially Begins Coronavirus Vaccine Rollout'
        ).should('exist');
        cy.contains(
          'Covid: EU launches mass vaccination in "touching moment of unity"'
        ).should('exist');
        cy.contains(
          'European Union nations have kicked off a mass effort to distribute COVID-19 vaccines to more than 450 million people'
        ).should('exist');
      });
    });

    it('not see the news index after the search results displayed', () => {
      cy.get('[data-cy="index"]').should('not.exist');
    });
  });
});
