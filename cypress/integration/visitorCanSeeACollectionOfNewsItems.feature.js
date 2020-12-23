describe("A visitor can,", () => {
	describe("if there are news,", () => {
		beforeEach(() => {
			cy.server();
			cy.route({
				method: "GET",
				url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=**",
				response: "fixture:news_index.json",
			});
			cy.visit("/")
		});

		it("successfully see list of news", () => {
			cy.get("[data-cy='news-index']").within(() => {
				cy.get(".header").should("exist");
				cy.get(".image").should("exist");
				cy.get(".meta").should("exist");
				cy.get(".description").should("exist");
				cy.get(".extra").should("exist");
			});
		});
	});
});
