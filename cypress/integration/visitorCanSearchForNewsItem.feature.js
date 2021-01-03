describe("visitor can search for news item", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0226cdc8350248edb433d7f76eb053bd",
      method: "GET",
      response: "fixture:news_index.json"
    })
    cy.visit("/")
    cy.get("[data-cy='search_input']").type("bitcoin").click()
  })

  it("is expected to display search results", () => {
    cy.get("[data-cy='news-index']").within(() => {
      cy.get(".header").should("contain", "How Do Bitcoin Transactions Work?")
      cy.get(".description").should("contain", "Moreover Bitcoin works as an investment take benefit cryptocurrency and so forth also. But that changed on their Bitcoin HYIP the corporation has modified the investment. Engineers of Bitcoin SV designers can seize info regarding mining OS that. Mining the cu…")
      cy.get(".extra").should("contain", "2020-12-10T21:34:39Z")
    })
  })
})