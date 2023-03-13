describe("App when clicked on easy", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays 8 cards when clicked on easy", () => {
    cy.get('[data-testid="btn-easy"]').click();
    cy.get('[data-testid="all-cards"]').children().should("have.length", 8);
  });
});
