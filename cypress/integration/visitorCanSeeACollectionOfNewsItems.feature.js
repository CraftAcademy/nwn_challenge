/* eslint-disable no-undef */
describe("Visitor can", () => {
  describe("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://newsapi.org/v2/top-headlines?country=us&apiKey=*",
        response: "fixture:news_index.json",
      });
      cy.visit("/");
    });

    it("see a collection of news items", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.get('[data-cy="article-1"]').should("exist");
        cy.get('[data-cy="article-2"]').should("exist");
        cy.get('[data-cy="article-3"]').should("exist");
      });
    });
    
  });
});
