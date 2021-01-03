/* eslint-disable no-undef */
describe("Visitor can search for articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      url:
        "http://newsapi.org/v2/everything?q=bitcoin&apiKey=dae7714c2de74ce1b1c383440f50a9e9",
      method: "GET",
      response: "fixture:news_index.json",
    });
    cy.visit("/");
    cy.get("[data-cy='search_input']").type("bitcoin");
    cy.get("[data-cy='search_button']").click();
  });

  it("is expected to display specific search results", () => {
    cy.get("[data-cy='searched-posts']").within(() => {
      cy.get("li").contains("bitcoin").should("exist");
      cy.get("li").contains("bitcoin").should("exist");
      cy.get("li").contains("bitcoin").should("exist");
    });
  });
});
