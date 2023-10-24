import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';


const queryCart = gql`
  query Cart ($id: String!){
    cart (id: $id) {
      id
    }
  }
`

export const ShoppingCart = () => {
  const {data} = useQuery(queryCart, {variables: {id: "8a44b8b3-0b22-42b0-a0f0-257c58dd8602"}})



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
