import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";

test("renders login username", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const input_username = screen.getByTestId("username");
  fireEvent.change(input_username, { target: { value: "user12" } });
  expect(input_username.value).toBe("user12");
});

test("renders login password", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const input_password = screen.getByTestId("password");
  fireEvent.change(input_password, { target: { value: "password12" } });
  expect(input_password.value).toBe("password12");
});

test("renders login submit button", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const submit = screen.getByTestId("submit-login");
  fireEvent.click(submit);
});
