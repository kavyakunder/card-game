describe("Card game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display title, sub-title and button", () => {
    cy.get('[data-testid="title"]').should("contain", "Match the Cards🃏");
    cy.get('[data-testid="sub-title"]').should(
      "contain",
      "Flip and Match to Win! Find all the pairs in the least moves possible!"
    );
    cy.get('[data-testid="all-levels"]').should("contain", "Choose a level:");
    cy.get('[data-testid="btn-easy"]').contains("Easy");
    cy.get('[data-testid="btn-medium"]').contains("Medium");
    cy.get('[data-testid="btn-hard"]').contains("Hard");
  });

  it("Increment moves when cards are flipped", () => {
    cy.get('[data-testid="btn-easy"]').click();
    cy.get('[data-testid="moves"]').contains("Moves");
    cy.get('[data-testid="btn-restart"]').contains("Restart");

    cy.get('[data-testid="all-cards"]').children().first().click();
    cy.get('[data-testid="all-cards"]').children().first().children();

    cy.get('[data-testid="all-cards"]').children().last().click();

    cy.get('[data-testid="moves"]').contains(1);
  });

  it("Should restart the game", () => {
    cy.get('[data-testid="btn-easy"]').click();
    cy.get('[data-testid="btn-restart"]').click();
    cy.get('[data-testid="all-levels"]').should("contain", "Choose a level:");
  });
});
