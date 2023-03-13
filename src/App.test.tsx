import { fireEvent, render, screen, act } from "@testing-library/react";
import { App } from "./App";
import { CardProps } from "./component/Card";

jest.mock("./component/Card", () => ({
  Card: ({ card, handleCardClick }: CardProps) => (
    <div onClick={() => handleCardClick(card)}>Card</div>
  ),
}));

describe("App", () => {
  it("Should render title, subtitle and buttons", async () => {
    render(<App />);
    const title = screen.getByTestId("title");
    const subtitle = screen.getByTestId("sub-title");
    const btnEasy = screen.getByTestId("btn-easy");
    const btnMedium = screen.getByTestId("btn-medium");
    const btnHard = screen.getByTestId("btn-hard");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(btnEasy).toBeInTheDocument();
    expect(btnMedium).toBeInTheDocument();
    expect(btnHard).toBeInTheDocument();
  });

  it("Should display 8 cards when clicked on easy", () => {
    render(<App />);

    const btnEasy = screen.getByTestId("btn-easy");
    fireEvent.click(btnEasy);

    const allCards = screen.getAllByText("Card");
    expect(allCards).toHaveLength(8);
  });

  it("Should display 12 cards when clicked on medium", () => {
    render(<App />);

    const btnMedium = screen.getByTestId("btn-medium");
    fireEvent.click(btnMedium);

    const allCards = screen.getAllByText("Card");
    expect(allCards).toHaveLength(12);
  });

  it("Should display 16 cards when clicked on hard", () => {
    render(<App />);

    const btnHard = screen.getByTestId("btn-hard");
    fireEvent.click(btnHard);

    const allCards = screen.getAllByText("Card");
    expect(allCards).toHaveLength(16);
  });

  it("Should increment the moves", () => {
    jest.useFakeTimers();
    render(<App />);

    const btnEasy = screen.getByTestId("btn-easy");
    fireEvent.click(btnEasy);

    const allCards = screen.getAllByText("Card");

    fireEvent.click(allCards[0]);
    fireEvent.click(allCards[1]);

    const moves = screen.getByTestId("moves");
    expect(moves).toHaveTextContent("Moves: 1");

    act(() => {
      jest.runAllTimers();
    });

    expect(allCards[0]).toHaveTextContent("Card");
  });

  it("Should restart the game", () => {
    render(<App />);
    const btnHard = screen.getByTestId("btn-hard");
    fireEvent.click(btnHard);

    const btnRestart = screen.getByTestId("btn-restart");
    const moves = screen.getByTestId("moves");
    expect(btnRestart).toBeInTheDocument();
    expect(moves).toBeInTheDocument();

    fireEvent.click(btnRestart);
  });
});
