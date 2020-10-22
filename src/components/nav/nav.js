import React from "react";   
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 7vh;
  border: 1px solid black;
`;

class Nav extends React.Component {
    render () {
        return <NavContainer>
            Navegação
        </NavContainer>
    }
}

export default Nav;