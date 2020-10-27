import React from "react";
import styled from "styled-components";
import camiseta01 from "./img/camiseta01.jpg";
import camiseta02 from "./img/camiseta02.jpg";
import camiseta03 from "./img/camiseta03.jpg";
import trajeespacial01 from "./img/traje-espacial01.jpg";
import trajeespacial02 from "./img/traje-espacial02.jpg";
import trajeespacial03 from "./img/traje-espacial03.jpg";
import brinquedo01 from "./img/brinquedo01.jpg";
import brinquedo02 from "./img/brinquedo02.jpg";
import brinquedo03 from "./img/brinquedo03.jpg";

const ProductsCardsContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductsInfoContainer = styled.div`
  display: flex;
  width: 25vw;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  margin: 10px;
  align-items: center;

  p {
    align-self: center;
    margin: 4px 0;
  }

  img {
    width: 270px;     
  }


`;

const AddToCartButton = styled.button`
    align-self: center;
    margin-top 4px;
    width: 200px;
`;

class ProductsCards extends React.Component {
  render() {
    return (
      <ProductsCardsContainer>
        <ProductsInfoContainer>
          <img src={camiseta01} />
          <p>Camiseta Infantil Planetas</p>
          <p>R$49,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={camiseta02} />
          <p>Camiseta Gato Astronauta</p>
          <p>R$59,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={camiseta03} />
          <p>Camiseta Astronauta à deriva</p>
          <p>R$59,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={trajeespacial01} />
          <p>Traje Espacial Infantil</p>
          <p>R$3.999,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={trajeespacial02} />
          <p>Traje Espacial Retrô</p>
          <p>R$4.599,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={trajeespacial03} />
          <p>Traje Espacial Futurist</p>
          <p>R$4.599,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={brinquedo01} />
          <p>Astronauta Famosinho</p>
          <p>R$69,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={brinquedo02} />
          <p>Astronauta Robô Mark IV</p>
          <p>R$129,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>

        <ProductsInfoContainer>
          <img src={brinquedo03} />
          <p>Nave Espacial Completa</p>
          <p>R$199,90</p>
          <AddToCartButton>Colocar na Nave</AddToCartButton>
        </ProductsInfoContainer>
      </ProductsCardsContainer>
    );
  }
}

export default ProductsCards;
