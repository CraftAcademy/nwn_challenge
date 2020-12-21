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
        "Pokémon Go: The Galarian Mr. Mime Ticket Isn't Worth the Price - CBR - Comic Book Resources"
      );
      cy.contains(
        "Take $15 off Call of Duty Black Ops Cold War for Xbox One or Xbox Series X at Best Buy"
      );
      cy.contains(
        "Update Daftar Harga HP Xiaomi Terbaru Desember 2020 - Bola Akurat"
      );
    });
  });

  it("Visitor can see the title of an article", () => {
    cy.get("[data-cy='article-2']").should(
      "contain",
      "Take $15 off Call of Duty Black Ops Cold War for Xbox One or Xbox Series X at Best Buy - Windows Central"
    );
  });

  it("Visitor can see the published date of an article", () => {
    cy.get("[data-cy='article-2']").should("contain", "2020-12-20T14:28:45Z");
  });

  it("Visitor can see the description of an article", () => {
    cy.get("[data-cy='article-2']").should(
      "contain",
      "Get it for $44.99 on the last gen Xbox One or PlayStation 4 or $54.99 on Xbox Series X or PlayStation 5 consoles."
    );
  });

  it("Visitor can click the link to an article page ", () => {
    cy.get("[data-cy='article-2']").within(() => {
      cy.get("a").contains("Read more").click();
      cy.url().should("include", "https://www.windowscentral.com/");
    });
  });
});
