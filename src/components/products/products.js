import React from "react";
import styled from "styled-components";

import ProductsCardsContainer from "./productscards";

const ProductsContainer = styled.div`
  display: flex;
  width: 100vw;
`;

class Products extends React.Component {
  render() {
    return (
      <ProductsContainer>
        <ProductsCardsContainer />
      </ProductsContainer>
    );
  }
}

export default Products;
