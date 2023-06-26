import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import Register from "../Register";

test("renders register page", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const input_username = screen.getByTestId("username");
  fireEvent.change(input_username, { target: { value: "user12" } });
  expect(input_username.value).toBe("user12");
});

test("renders register password", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const input_password = screen.getByTestId("password");
  fireEvent.change(input_password, { target: { value: "password12" } });
  expect(input_password.value).toBe("password12");
});

test("renders register confirm password", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const input_confirm_password = screen.getByTestId("confirm-password");
  fireEvent.change(input_confirm_password, { target: { value: "password12" } });
  expect(input_confirm_password.value).toBe("password12");
});

test("renders submit button", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const submit = screen.getByTestId("submit-register");
  fireEvent.click(submit);
});
