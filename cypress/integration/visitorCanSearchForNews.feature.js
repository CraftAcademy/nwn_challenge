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
    cy.get("button").contains("Search").click();
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
    cy.get("[data-cy='article-1']").should(
      "contain",
      "The great 2020 Gmail outage: A tale of two blackouts, and lessons learned - IT World Canada"
    );
  });

  it("displays the published date of an article", () => {
    cy.get("[data-cy='article-1']").should("contain", "2020-12-21T13:28:20Z");
  });

  it("displays the description of an article", () => {
    cy.get("[data-cy='article-1']").should(
      "contain",
      "Last week was an unhappy one for Google. It suffered two major outages; the root cause of each could concisely be described as 'ops'. Here's what happened."
    );
  });

  it("displays the link to an article page ", () => {
    cy.get("[data-cy='article-1']").within(() => {
      cy.get("a").contains("Read more").click();
      cy.url().should("include", "https://www.itworldcanada.com");
    });
  });
});
