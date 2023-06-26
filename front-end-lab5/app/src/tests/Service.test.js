import {
  render,
  screen,
  userEvent,
  fireEvent,
  wait,
} from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "../Service";

test("renders service loading", async () => {
  render(
    <BrowserRouter>
      <Service />
    </BrowserRouter>
  );
  const loading = screen.getByText("Loading...");
  expect(loading).toBeInTheDocument();

  expect(await screen.findByText("Choose your auditorium")).toBeInTheDocument();
});
