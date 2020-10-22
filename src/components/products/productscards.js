import React from "react"   
import styled from 'styled-components';

const ProductsCardsContainer = styled.div`
  display: flex;
  border: 1px solid black;
`;  

class ProductsCards extends React.Component {
    render () {
        return <ProductsCardsContainer>
            Itens Produtos
        </ProductsCardsContainer>
    }
}

export default ProductsCards;