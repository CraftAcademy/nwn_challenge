describe("User can search for articles", () => {
  describe("by entering a search value in the input field and click the search button", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=**",
        method: "GET",
        response: "fixture:search_for_bitcoin",
      });
      cy.visit("/");
      cy.get("[data-cy='search_input']").type("bitcoin");
      cy.get("[data-cy='search_button']").click();
    });

    it("is expected to show the search result", () => {
      cy.get("[data-cy='search_results']").within(() => {
        cy.get(".image").should("exist");
        cy.get(".header").contains(
          "Is the New Visa Bitcoin Rewards Card Worth It?"
        );
        cy.get(".meta").should("contain", "Lifehacker.com");
        cy.get(".description").should(
          "contain",
          "Visa has partnered with cryptocurrency startup BlockFi to offer the first rewards credit card that pays out in Bitcoin rather than cash, but is it worth applying for? Unless you’re extremely bullish on cryptocurrency and don’t mind getting seriously dinged fo…"
        );
      });
    });
  });
});
