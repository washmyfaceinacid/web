import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import User from "../User";

test("renders user username", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const input_username = screen.getByTestId("input-username");
  fireEvent.change(input_username, { target: { value: "user12" } });
  expect(input_username.value).toBe("user12");
});

test("renders user input password", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const input_password = screen.getByTestId("input-password");
  fireEvent.change(input_password, { target: { value: "password12" } });
  expect(input_password.value).toBe("password12");
});

test("renders user first name", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const input_first_name = screen.getByTestId("input-first-name");
  fireEvent.change(input_first_name, { target: { value: "user12FirstName" } });
  expect(input_first_name.value).toBe("user12FirstName");
});

test("renders user last name", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const input_last_name = screen.getByTestId("input-last-name");
  fireEvent.change(input_last_name, { target: { value: "user12LastName" } });
  expect(input_last_name.value).toBe("user12LastName");
});

test("renders user phone", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const input_phone = screen.getByTestId("input-phone");
  fireEvent.change(input_phone, { target: { value: "121212" } });
  expect(input_phone.value).toBe("121212");
});

test("renders user email", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const input_email = screen.getByTestId("input-email");
  fireEvent.change(input_email, { target: { value: "user12@gmail.com" } });
  expect(input_email.value).toBe("user12@gmail.com");
});

test("renders buttons", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const submit = screen.getByTestId("save");
  fireEvent.click(submit);

  const logout = screen.getByTestId("logout");
  fireEvent.click(logout);

  const delete_ = screen.getByTestId("delete");
  fireEvent.click(delete_);
});
