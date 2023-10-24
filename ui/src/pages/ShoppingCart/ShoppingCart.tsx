import React from "react";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  return <div>
    <h1>
      ShoppingCart
      </h1>
    
    
      <Link to="/address">
        <button>checkout</button>
      </Link>

    </div>;
};
