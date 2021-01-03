describe("Visitor can search for news itemss", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "https://newsapi.org/v2/top-headlines?q=google&category=technology&apiKey=*",
      response: "fx:news_search_result.json",
    });
    cy.visit("/");
    cy.get("[data-cy='search-input']").type("google");
    cy.get("[data-cy='search-button']").click();
  });

  it("displays a list of search result", () => {
    cy.get("[data-cy='news-feed']").within(() => {
      cy.contains(
        "The great 2020 Gmail outage: A tale of two blackouts, and lessons learned - IT World Canada"
      );
      cy.contains(
        "vivo Y31 key specs revealed via Google Play Console listing - gizmochina"
      );
      cy.contains("Google Camera Go gets HDR mode - IOL");
    });
  });

  it("displays the title of an article", () => {
    cy.get("[data-cy='article-2']").should(
      "contain",
      "Incipio Grip case for Google Pixel 4a 5G: Enhanced grip and 14 feet drop protection"
    );
  });

  it("displays the published date of an article", () => {
    cy.get("[data-cy='article-2']").should("contain", "2020-12-21T12:53:00Z");
  });

  it("displays the description of an article", () => {
    cy.get("[data-cy='article-2']").should(
      "contain",
      "While the Pixel 4a 5G is an affordable phone, it is still worth protecting from accidental drops"
    );
  });

  it("displays the link to an article page ", () => {
    cy.get("[data-cy='article-2']").within(() => {
      cy.get("a").contains("Read more").click();
      cy.url().should("include", "https://www.zdnet.com/pictures/");
    });
  });
});
