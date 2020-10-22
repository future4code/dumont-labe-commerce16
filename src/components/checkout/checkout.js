import React from "react"   
import styled from 'styled-components';
import CheckoutItemContainer from './checkoutitem';

const CheckoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 7vh;
  border: 1px solid black;
`;

class Checkout extends React.Component {
    render () {
        return <CheckoutContainer>
            Carrinho
            <CheckoutItemContainer/>
        </CheckoutContainer>
    }
}

export default Checkout;