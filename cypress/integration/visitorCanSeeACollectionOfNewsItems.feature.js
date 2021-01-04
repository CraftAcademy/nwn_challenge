describe("Visitor can view the list of news... ", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=**",
      response: "fixture:news_index.json",
    });
    cy.visit("/");
  });
  it("...successfully", () => {
    cy.get("[data-cy='news-index']").within(() => {
      cy.get(".image").should("exist");
      cy.get("[data-cy='author']").contains("Kayla Brown");
      cy.get("[data-cy='publishedAt']").contains("2021-01-02T21:54:00Z");
      cy.get("[data-cy='title']").contains(
        "Restaurants open for dine-in Monday, must self-certify online before opening their doors - ABC27"
      );
      cy.get("[data-cy='description']").contains(
        "As of Monday, Jan. 4 restaurants may once again open at 50 percent capacity for indoor dining if they’ve completed the online self-certification process."
      );
    });
  });
});
