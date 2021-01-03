/* eslint-disable no-undef */
describe("On index page ", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?language=en&apiKey=*",
      response: "fixture:news_index.json",
    });
    cy.visit("/");
  });

  it("successfully render NewsCards with content", () => {
    cy.get("[data-cy='articles-index']").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("exist");
      cy.get(".meta").should("exist");
      cy.get(".description").should("exist");
    });
  });
});
