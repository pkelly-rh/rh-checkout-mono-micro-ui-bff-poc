import React from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import "./images/icons/favicon.ico";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

if (module && module.hot) {
  module.hot.accept();
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
