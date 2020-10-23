import React from "react";
import styled from "styled-components";
import CheckoutItemContainer from "./checkoutitem";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const CartListContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 50vw;

  p {
    align-self: flex-end;
  }

`;

class Checkout extends React.Component {
  render() {
    return (
      <CheckoutContainer>
        <h3>Nave de compras</h3>
        <CartListContainer>
          <CheckoutItemContainer />
          <CheckoutItemContainer />
          <CheckoutItemContainer />
          <p>Valor total: R$100,00</p>
        </CartListContainer>
        
      </CheckoutContainer>
    );
  }
}

export default Checkout;
