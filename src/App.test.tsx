import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { App } from "./App";
import { CardProps } from "./component/Card";

jest.mock("./component/Card", () => ({
  Card: ({ card, handleCardClick }: CardProps) => (
    <div onClick={() => handleCardClick(card)}>Card</div>
  ),
}));

describe("App", () => {
  it("renders title,subtitle and button", async () => {
    render(<App />);
    const title = screen.getByTestId("title");
    const subtitle = screen.getByTestId("sub-title");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();

    const btnEasy = screen.getByTestId("btn-easy");
    const btnMedium = screen.getByTestId("btn-medium");
    const btnHard = screen.getByTestId("btn-hard");

    expect(btnEasy).toBeInTheDocument();
    expect(btnMedium).toBeInTheDocument();
    expect(btnHard).toBeInTheDocument();
  });

  it("displays 8 cards when clicked on easy", async () => {
    jest.useFakeTimers();
    render(<App />);

    const btnEasy = screen.getByTestId("btn-easy");
    fireEvent.click(btnEasy);

    const allCards = screen.getAllByText("Card");
    expect(allCards).toHaveLength(8);

    fireEvent.click(allCards[0]);
    expect(allCards[0].textContent).not.toBe("");

    fireEvent.click(allCards[1]);
    expect(allCards[1].textContent).not.toBe("");

    const moves = screen.getByTestId("moves");
    expect(moves).toHaveTextContent("Moves: 1");

    await act(async () => {
      jest.runAllTimers();
    });

    expect(allCards[0].innerHTML).toBe("Card");
    expect(allCards[1].innerHTML).toBe("Card");
  });

  it("displays 12 cards when clicked on medium", () => {
    render(<App />);

    const btnMedium = screen.getByTestId("btn-medium");
    fireEvent.click(btnMedium);

    const allCards = screen.getAllByText("Card");
    expect(allCards).toHaveLength(12);
  });

  it("displays 16 cards when clicked on hard", () => {
    render(<App />);

    const btnHard = screen.getByTestId("btn-hard");
    fireEvent.click(btnHard);

    const allCards = screen.getAllByText("Card");
    expect(allCards).toHaveLength(16);
  });

  it("restarts the game", () => {
    render(<App />);
    const btnHard = screen.getByTestId("btn-hard");
    fireEvent.click(btnHard);

    const btnRestart = screen.getByTestId("btn-restart");
    const moves = screen.getByTestId("moves");
    expect(btnRestart).toBeInTheDocument();
    expect(moves).toBeInTheDocument();

    fireEvent.click(btnRestart);

    expect(moves).not.toBeInTheDocument();
    expect(moves).toHaveTextContent("Moves: 0");
  });
});
