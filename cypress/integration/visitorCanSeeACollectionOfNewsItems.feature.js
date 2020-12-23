describe("A visitor can,", () => {
	beforeEach(() => {
		cy.server();
		cy.route({
			method: "GET",
			url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=**",
			response: "fixture:news_index.json",
		});
		cy.visit("/");
	});

	it("successfully see list of news", () => {
		cy.get("[data-cy='news-index']").within(() => {
			cy.get(".header").should(
				"contain",
				"Skylar Mack, American teen jailed for violating quarantine in Cayman Islands, gets reduced sentence - CBS News"
			);
			cy.get(".image").should("exist");
			cy.get(".meta").should("contain", "Zoe Christen Jones");
			cy.get(".description").should(
				"contain",
				"Skylar Mack, 21, was arrested after breaking quarantine to attend her boyfriend's jet ski competition."
			);
		});
	});
});
