import React from "react"
import styled from 'styled-components';

const CheckoutItemContainer = styled.div`
  display: flex;
  border: 1px solid black;
`;

class CheckoutItem extends React.Component {
    render () {
        return <CheckoutItemContainer>
            Itens Carrinho
        </CheckoutItemContainer>
    }
}

export default CheckoutItem;