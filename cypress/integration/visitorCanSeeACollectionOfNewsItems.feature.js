/* eslint-disable no-undef */
describe('Visitor can', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'https://newsapi.org/v2/top-headlines?language=en&apiKey=*',
        response: 'fixture:news_index.json',
      });
      cy.visit('/');
    });

    it('see a collection of news items', () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.get('[data-cy="article-0"]').should('exist');
        cy.get('[data-cy="article-1"]').should('exist');
        cy.get('[data-cy="article-2"]').should('exist');
        cy.get('[data-cy="article-21"]').should('not.exist');
      });
    });

    it('see image, title, description, author and publication date of each article', () => {
      cy.get('[data-cy="article-1"]').within(() => {
        cy.get('[data-cy="image"]').should(
          'have.attr',
          'src',
          'https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png'
        );
        cy.get('[data-cy="title"]').contains('The Future Of The U.S. Dollar');
        cy.get('[data-cy="description"]').contains(
          'The US dollar is still the primary international global reserve currency and still figures as the most important currency in Forex markets.'
        );
        cy.get('[data-cy="author"]').contains(
          'WWS Swiss Financial Consulting SA'
        );
        cy.get('[data-cy="publication-date"]').contains('2020-12-10T21:27:44Z');
      });
    });
  });
});
