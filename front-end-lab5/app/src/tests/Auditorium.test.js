import {
  render,
  screen,
  userEvent,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ReactRouter from "react-router";
import Auditorium from "../Auditorium";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));

test("renders auditorium slider and reserves", async () => {
  window.localStorage.setItem(
    "auditoriumData",
    '{"0":{"idAudience":1,"number":"1"},"1":{"idAudience":2,"number":"2"},"2":{"idAudience":3,"number":"3"}}'
  );
  window.localStorage.setItem(
    "userData",
    '{"idUser":33,"username":"user5","firstName":"","lastName":"","email":"","password":"5","phoneNumber":"","userStatus":"1"}'
  );
  render(
    <BrowserRouter>
      <Auditorium />
    </BrowserRouter>
  );
  const slider = screen.getByTestId("slider");
  fireEvent.change(slider, { target: { value: "12" } });
  expect(slider.value).toBe("12");

  fireEvent.click(await screen.findByTestId("reservate"));
});

test("renders auditorium change", async () => {
  window.localStorage.setItem(
    "auditoriumData",
    '{"0":{"idAudience":1,"number":"1"},"1":{"idAudience":2,"number":"2"},"2":{"idAudience":3,"number":"3"}}'
  );
  window.localStorage.setItem(
    "userData",
    '{"idUser":33,"username":"user5","firstName":"","lastName":"","email":"","password":"5","phoneNumber":"","userStatus":"1"}'
  );
  render(
    <BrowserRouter>
      <Auditorium />
    </BrowserRouter>
  );
  const slider = screen.getByTestId("slider");
  fireEvent.change(slider, { target: { value: "13" } });
  fireEvent.click(await screen.findByTestId("change"));
});

test("renders auditorium delete", async () => {
  window.localStorage.setItem(
    "auditoriumData",
    '{"0":{"idAudience":1,"number":"1"},"1":{"idAudience":2,"number":"2"},"2":{"idAudience":3,"number":"3"}}'
  );
  window.localStorage.setItem(
    "userData",
    '{"idUser":33,"username":"user5","firstName":"","lastName":"","email":"","password":"5","phoneNumber":"","userStatus":"1"}'
  );
  render(
    <BrowserRouter>
      <Auditorium />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByTestId("delete"));
});
