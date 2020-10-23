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

function App() {
  return (
    <AppContainer>
      <Nav />
      <Filters />
      <Products />
      <Checkout />
    </AppContainer>
  );
}

export default App;
