import React from "react";
import styled from "styled-components";
import logosite from "../products/img/logo-labecommerce.png";
import imgcarrinhocompras from "../products/img/shopping-cart-astronaut.png";

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 7vh;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.label`
  display: flex;
  padding: 0 2vw;
`;

class Nav extends React.Component {
  render() {
    return (
      <NavContainer>
        <img src={logosite} />

        <div>
          <InputContainer>
            Buscar por nome:
            <input type="text" />
          </InputContainer>
        </div>

        <img src={imgcarrinhocompras} />
      </NavContainer>
    );
  }
}

export default Nav;
