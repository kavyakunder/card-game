describe("App when clicked on medium", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays 12 cards when clicked on hard", () => {
    cy.get('[data-testid="btn-medium"]').click();
    cy.get('[data-testid="all-cards"]').children().should("have.length", 12);
  });
});
