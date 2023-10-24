import React from "react";
import { Link } from "react-router-dom";

export const Review = () => {
  return (
    <div>
      <h1>Review</h1>

      <Link to="/confirmation">
        <button>Continue</button>
      </Link>
    </div>
  );
};
