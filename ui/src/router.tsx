import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Address } from "./pages/Address";
import { Payment } from "./pages/Payment";
import { Review } from "./pages/Review";
import { Confirmation } from "./pages/Confirmation";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <NoMatch />,
      children: [
        {
          path: "/",
          element: <ShoppingCart />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "/address",
          element: <Address />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/confirmation",
          element: <Confirmation />,
        },
      ],
    },
  ],
  {
    basename: "/rh-checkout-v3",
  }
);
