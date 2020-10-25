import React from "react";
import Nav from "./components/nav/nav";
import Filters from "./components/filters/filters";
import Products from "./components/products/products";
import Checkout from "./components/checkout/checkout";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex-row;
  padding: 0;
  margin: 0;
`;

const produtos = [

  {
    id: 1,
    name: "Camiseta Infantil Planetas",
    value: 49.90,
    imageUrl: "../img/camiseta01.jpg",
  },
  {
    id: 2,
    name: "Camiseta Gato Astronauta",
    value: 59.90,
    imageUrl: "../img/camiseta02.jpg",
  },
  {
    id: 3,
    name: "Camiseta Astronauta à deriva",
    value: 59.90,
    imageUrl: "../img/camiseta03.jpg",
  },
  {
    id: 4,
    name: "Traje Espacial Infantil",
    value: 3999.90,
    imageUrl: "../img/traje-espacial01.jpg",
  },
  {
    id: 5,
    name: "Traje Espacial Retrô",
    value: 4599.90,
    imageUrl: "../img/traje-espacial02.jpg",
  },
  {
    id: 6,
    name: "Traje Espacial Futurist",
    value: 4599.90,
    imageUrl: "../img/traje-espacial03.jpg",
  },
  {
    id: 7,
    name: "Astronauta Famosinho",
    value: 69.90,
    imageUrl: "../img/brinquedo01.jpg",
  },
  {
    id: 8,
    name: "Astronauta Robô Mark IV",
    value: 129.90,
    imageUrl: "../img/brinquedo02.jpg",
  },
  {
    id: 9,
    name: "Nave Espacial Completa",
    value: 199.90,
    imageUrl: "../img/brinquedo03.jpg",
  }
  
  ]


function App() {
  return (
    <AppContainer>
      <Nav />
      <Filters />
      <Products produtos={produtos}/>
      <Checkout />
    </AppContainer>
  );
}

export default App;
