/* eslint-disable no-undef */
describe('Visitor can search for articles', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.get("[data-cy='search_input']").type('bitcoin')
    cy.get("[data-cy='search_button']").click()

  })
  
  it('is expected to display search results', () => {
    
  });
})
