import React from "react";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <div>
      <h1>Thank You</h1>

      <Link to="/shopping-cart">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};
