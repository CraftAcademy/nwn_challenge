describe("visitor can search...", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://newsapi.org/v2/top-headlines?country=se&apiKey=*",
      response: "fixture:article_search.json",
    });
    cy.visit("/");
  });

  it("user can enter and see results", () => {
    cy.get("[data-cy='search-input']").type("covid");
    cy.get("[data-cy='search-button']").click();
    cy.wait(400);
    cy.get("[data-cy='articleCard']").within(() => {
      cy.contains("Langa, 30, har haft muterade viruset");
    });
  });
});
