import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";

test("renders navbar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
