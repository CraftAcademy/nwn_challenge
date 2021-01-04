describe("User can search...", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://newsapi.org/v2/everything?q=business",
      response: "fixture:business_news_search.json",
    });
    cy.visit("/");
    cy.get("[data-cy='search-input']").type("Business");
    cy.get("[data-cy='search-button']").click();
  });

  it("...for a specific article", () => {
    cy.get("[data-cy='news-index']").within(() => {
      cy.get("[data-cy='author']").contains("Stephanie Lin");
      cy.get("[data-cy='publishedAt']").contains("2021-01-03T06:49:00Z");
      cy.get(".image").should("exist");
      cy.get("[data-cy='description']").contains(
        "Small businesses struggling from the COVID-19 shutdowns are getting another round of financial relief."
      );
      cy.get("[data-cy='title']").contains(
        "What we know about the new PPP loans for small businesses - KCRA Sacramento"
      );
    });
  });
});
