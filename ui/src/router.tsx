import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <NoMatch />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/rh-react-micro-template-v1",
  }
);
