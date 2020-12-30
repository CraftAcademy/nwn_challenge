describe("A user can see list of articles", () => {
  describe("if there are articles", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines?country=se&apiKey=**",
        response: "fixture:news_index.json",
      });
      cy.visit("/");
    });

    it("successfully", () => {
      cy.get("[data-cy='article-index']").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").should(
          "contain",
          "How Do Bitcoin Transactions Work?"
        );
        cy.get(".meta").should("contain", "modemflame5");
        cy.get(".description").should(
          "contain",
          "Moreover Bitcoin works as an investment take benefit cryptocurrency and so forth also. But that changed on their Bitcoin HYIP the corporation has modified the investment. Engineers of Bitcoin SV designers can seize info regarding mining OS that. Mining the cu…"
        );
      });
    });

    describe("if there are no articles", () => {
      before(() => {
        cy.server();
        cy.route({
          method: "GET",
          url: "https://newsapi.org/v2/top-headlines?country=se&apiKey=**",
          response: { articles: [] },
        });
        cy.visit("/");
      });

      it("is presented with an error message", () => {
        cy.get("[data-cy='article-index']").should("not.exist");
        cy.get("[data-cy='empty-index']").should("exist");
      });
    });
  });
});
