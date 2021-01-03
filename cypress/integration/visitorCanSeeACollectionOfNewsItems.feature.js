describe("A visitor can see list of news", () => {
		it("is expected to show list of news", () => {
			cy.visit("/")
			cy.get("[data-cy='news-index']").within(() => {
				cy.get(".header").should("exist");
				cy.get(".image").should("exist");
				cy.get(".meta").should("exist");
				cy.get(".description").should("exist");
				cy.get(".extra").should("exist");
			});
		});
});
