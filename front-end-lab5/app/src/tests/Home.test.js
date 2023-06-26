import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

test("renders home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const greet = screen.getByText("Try on your own");
  expect(greet).toBeInTheDocument();
});
