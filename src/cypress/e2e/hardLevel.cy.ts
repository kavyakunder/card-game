describe("App when clicked on hard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays 16 cards when clicked on hard", () => {
    cy.get('[data-testid="btn-hard"]').click();
    cy.get('[data-testid="all-cards"]').children().should("have.length", 16);
  });
});
