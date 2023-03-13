import { Card } from "./Card";

import { fireEvent, render, screen } from "@testing-library/react";
import { CardProps } from "./Card";

describe("Card.tsx", () => {
  it("Should render card on screen", () => {
    const flippedCard = { ...mockCard, isFlipped: true };
    render(<Card {...mockProps} card={flippedCard} />);

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("Should call handleCardClick function when clicked", () => {
    render(<Card {...mockProps} />);

    const card = screen.getByTestId("card");
    fireEvent.click(card);

    expect(mockHandleCardClick).toHaveBeenCalledWith(mockCard);
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
