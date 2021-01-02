/* eslint-disable no-undef */
describe("On index page ", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://newsapi.org/v2/top-headlines",
      response: "fixture:new_index.json",
    });
    cy.visit("/");
  });

  it("user can see first article card ", () => {
    cy.get("[data-cy='news-card']").within(() => {
      cy.contains(
        "DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017"
      );
      cy.contains("FXStreet");
      cy.contains(
        "DBS Bank of Singapore has just announced the launch of a digital asset exchange featuring Bitcoin"
      );
    });
  });
});
