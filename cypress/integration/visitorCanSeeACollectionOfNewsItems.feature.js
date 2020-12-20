describe("Visitor can see top headlines", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?category=technology&apiKey=*",
      response: "fx:news_index.json",
    });
    cy.visit("/");
  });
  it("Visitor can see a list of articles", () => {
    cy.get("[data-cy='news-feed']").within(() => {
      cy.contains(
        "Take $15 off Call of Duty Black Ops Cold War for Xbox One or Xbox Series X at Best Buy"
      );
    });
  });
  it("Visitor can see the title of an article", () => {
    cy.get("[data-cy='news-card']").should(
      "contain",
      "Take $15 off Call of Duty Black Ops Cold War for Xbox One or Xbox Series X at Best Buy - Windows Central"
    );
  });
  it("Visitor can see the published date of an article", () => {
    cy.get("[data-cy='news-card']").should(
      "contain",
      "Published at 2020-12-20"
    );
  });
  it("Visitor can see the description of an article", () => {
    cy.get("[data-cy='news-card']").should(
      "contain",
      "Get it for $44.99 on the last gen Xbox One or PlayStation 4 or $54.99 on Xbox Series X or PlayStation 5 consoles."
    );
  });
  it("Visitor can click the link to an article page ", () => {
    cy.get("a").contains("Read more").click();
    cy.url().should("include", "https://www.windowscentral.com/");
  });
});
