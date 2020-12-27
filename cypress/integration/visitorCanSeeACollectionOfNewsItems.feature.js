describe("A user can see list of articles", () => {
  describe("if there are articles", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:news_index.json",
      });
      cy.visit("/");
    });

    it("successfully", () => {
      cy.get("[data-cy='article-index']").within(() => {
        cy.contains("How Do Bitcoin Transactions Work?");
        cy.contains("The Future Of The U.S. Dollar");
        cy.contains(
          "How To Build A Trusted Brand In An Untrusted World: Blockchain"
        );
        cy.contains(
          "Market Wrap: Bitcoin Slides Below $18K as ETH Is More Volatile Than BTC in 2020"
        );
        cy.contains("Bitcoin a Cyberpunk 2077. Co mają wspólnego?");
        cy.contains(
          "US stocks waver as investors digest rising jobless claims and stimulus gridlock"
        );
        cy.contains("Sophie Mudd Tits for Will Ferrell of the Day");
        cy.contains(
          "Bonds & Black Gold Bid As Negative Nabobs Battle New Issue Nirvanans"
        );
        cy.contains(
          "2021 Predictions: The Year of Malicious Automation by Brad LaPorte"
        );
        cy.contains(
          "169-Year-Old Insurer MassMutual Invests $100 Million in Bitcoin"
        );
        cy.contains(
          "DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017"
        );
        cy.contains(
          "Bitcoin Weak on Lower-Time Frames as Analysts Eye Move to $17,000 Region"
        );
      });
    });
  });
});
