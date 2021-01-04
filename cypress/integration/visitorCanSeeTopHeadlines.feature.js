describe("on homepage user can see...", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://newsapi.org/v2/top-headlines?country=se&apiKey=*",
      response: "fixture:news_index.json",
    });
    cy.visit("/");
  });

  it("can see list of top headlines", () => {
    cy.get("[data-cy='header']").contains("News Wire Network");
    cy.get("[data-cy='articleCard']").within(() => {
      cy.get(".header").should("contain", "How Do Bitcoin Transactions Work?");
      cy.get(".description").should(
        "contain",
        "Bitcoin works as an investment"
      );
      cy.get(".meta").should("contain", "modemflame5");
    });
  });
});
