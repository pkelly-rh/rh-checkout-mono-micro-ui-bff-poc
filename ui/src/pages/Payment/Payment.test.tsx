import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "@testing-library/react";
import { Payment } from "./Payment";
import { MemoryRouter } from "react-router-dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("<Payment />", () => {
  it("renders", () => {
    act(() => {
      window.location.pathname = "/";
      ReactDOM.createRoot(container).render(
        <MemoryRouter initialEntries={["/"]}>
          <Payment />
        </MemoryRouter>
      );
    });
  });
});
