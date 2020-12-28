/* eslint-disable no-undef */
describe('Visitor', () => {
  describe('can', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'https://newsapi.org/v2/top-headlines?language=en&apiKey=*',
        response: 'fixture:news_index.json',
      });
      cy.route({
        method: 'GET',
        url:
          'https://newsapi.org/v2/everything?q=*&sortBy=popularity&language=en&apiKey=*',
        response: 'fixture:news_search_for_covid.json',
      });
      cy.visit('/');
    });

    it('search for news that interests him/her and see the search results', () => {
      cy.get('[data-cy="search-input"]').type('covid19');
      cy.get('[data-cy="search-button"]').click();
      cy.get('[data-cy="index"]').within(() => {
        cy.get('[data-cy="article-0"]')
          .find('[data-cy="title"]')
          .contains(
            'European Union Officially Begins Coronavirus Vaccine Rollout'
          );
        cy.get('[data-cy="article-1"]')
          .find('[data-cy="title"]')
          .contains(
            "Covid: EU launches mass vaccination in 'touching moment of unity'"
          );
        cy.get('[data-cy="article-2"]')
          .find('[data-cy="title"]')
          .contains(
            'European Union nations have kicked off a mass effort to distribute COVID-19 vaccines to more than 450 million people'
          );
      });
    });
  });
});
