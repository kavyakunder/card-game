import { Card } from "./Card";
import { fireEvent, render, screen } from "@testing-library/react";
import { CardProps } from "./Card";

describe("Card", () => {
  it("should render card on screen", () => {
    render(<Card {...mockProps} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("calls handleCardClick function when clicked", () => {
    render(<Card {...mockProps} />);

    const card = screen.getByTestId("card");
    fireEvent.click(card);

    expect(mockHandleCardClick).toHaveBeenCalledWith(mockCard);
  });

  it("shows the front design when the card is flipped", () => {
    const flippedCard = { ...mockCard, isFlipped: true };
    render(<Card card={flippedCard} handleCardClick={mockHandleCardClick} />);

    const card = screen.getByTestId("card");
    expect(card.innerHTML).toContain(flippedCard.design);
  });

  it("shows the back design when the card is not flipped", () => {
    render(<Card {...mockProps} />);

    const card = screen.getByTestId("card");
    expect(card.innerHTML).not.toContain(mockCard.design);
  });
});

const mockCard = {
  id: 1,
  design: "🚗",
  isFlipped: false,
  isMatched: false,
};
const mockHandleCardClick = jest.fn();

const mockProps: CardProps = {
  card: mockCard,
  handleCardClick: mockHandleCardClick,
};
