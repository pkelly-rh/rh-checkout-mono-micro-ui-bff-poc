import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "./images/icons/favicon.ico";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';



if (module && module.hot) {
  module.hot.accept();
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
