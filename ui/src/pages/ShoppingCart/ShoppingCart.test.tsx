import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "@testing-library/react";
import { ShoppingCart } from "./ShoppingCart";
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

describe("<ShoppingCart />", () => {
  it("renders", () => {
    act(() => {
      window.location.pathname = "/";
      ReactDOM.createRoot(container).render(
        <MemoryRouter initialEntries={["/"]}>
          <ShoppingCart />
        </MemoryRouter>
      );
    });
  });
});
