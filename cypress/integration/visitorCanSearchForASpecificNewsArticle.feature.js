describe("User can,", () => {
		beforeEach(() => {
			cy.server();
			cy.route({
				method: "GET",
				url: "http://newsapi.org/v2/everything?q=bitcoin",
				response: "fixture:news_index.json",
			});
      cy.visit("/")
      cy.get("[data-cy='search-input']").type("Bitcoin");
			cy.get("[data-cy='search-input']").click();
		});

		it("successfully search for a specific news article", () => {
      cy.get(".header").should("contain", "How Do Bitcoin Transactions Work?")
      cy.get(".image").should("exist");
      cy.get(".meta").should("contain", "modemflame5")
      cy.get(".description").should("contain", "Moreover Bitcoin works as an investment take benefit cryptocurrency and so forth also. But that changed on their Bitcoin HYIP the corporation has modified the investment. Engineers of Bitcoin SV designers can seize info regarding mining OS that. Mining the cu…")
			});
		});
