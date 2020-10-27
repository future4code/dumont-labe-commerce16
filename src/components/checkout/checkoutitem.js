import React from "react";
import styled from "styled-components";

const CheckoutItemContainer = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  
  p {
    padding: 0 25px;
  }
  
`;

class CheckoutItem extends React.Component {
  render() {
    return (
      <CheckoutItemContainer>
        <p>1x</p>
        <p>Nome Produto</p>
        <button>Remover</button>
      </CheckoutItemContainer>
    );
  }
}

export default CheckoutItem;
