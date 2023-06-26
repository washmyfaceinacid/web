import { render, screen } from "@testing-library/react";
import LoginRoute from "../LoginRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

test("renders login route component", () => {
  render(
    <BrowserRouter>
      <LoginRoute />
    </BrowserRouter>
  );
});
