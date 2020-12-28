describe('User can search for articles', () => {
  describe('by entering a search value in the input field and click the search button', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        url: "https://newsapi.org/v2/everything?q=bitcoin",
        method: "GET",
        response: "fixture:search_for_bitcoin"
      })
      cy.visit("/")
      cy.get("[data-cy='search_input']").type('bitcoin')
      cy.get("[data-cy='search_button']").click()
    });

    it('is expected to show the search result', () => {
      cy.get
    });
    
    
  })
  
})
