import React from "react";
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <div>
      <h1>Payment</h1>

      <Link to="/review">
        <button>Continue</button>
      </Link>
    </div>
  );
};
