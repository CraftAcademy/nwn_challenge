describe("User can search for articles", () => {
  describe("by entering a search value in the input field and click the search button", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        url: "https://newsapi.org/v2/everything?q=bitcoin",
        method: "GET",
        response: "fixture:search_for_bitcoin.json",
      });
      cy.visit("/");
      cy.get("[data-cy='search_input']").type("bitcoin");
      cy.get("[data-cy='search_button']").click();
    });

    it("is expected to show the search result", () => {
      cy.get("[data-cy='article-index']").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").contains(
          "Is the New Visa Bitcoin Rewards Card Worth It?"
        );
        cy.get(".meta").should("contain", "Lifehacker.com");
        cy.get(".description").should(
          "contain",
          "Do the price gains make sense in the short-term? Who knows. But they are not based on nothing."
        );
      });
    });
  });
});
