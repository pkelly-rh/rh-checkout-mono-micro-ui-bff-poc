import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';


const queryCart = gql`
  query Cart {
    cart (id: "111") {
      id
    }
  }
`

export const ShoppingCart = () => {
  const {data} = useQuery(queryCart, {variables: {id: "0000"}})



  return <div>
    <h1>
      ShoppingCart
      </h1>
      <h3>cartID {data?.cart?.id}</h3>

      <Link to="/address">
        <button>checkout</button>
      </Link>

    </div>;
};
