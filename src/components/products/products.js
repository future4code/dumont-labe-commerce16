import React from "react"   
import styled from 'styled-components';
import ProductsCardsContainer from './productscards';

const ProductsContainer = styled.div`
  	display: flex;
  	width: 100vw;
  	border: 1px solid black;
`;

const ProductsHeader = styled.div`
	display: flex;
`;

class Products extends React.Component {
    render () {
        return <ProductsContainer>
            <ProductsHeader>
				<p>Quantidade de Produtos: 4</p>
				<label>
					Ordenação:
					<select>
						<option>Crescente</option>
						<option>Decrescente</option>
					</select>
				</label>
			</ProductsHeader>

				<ProductsCardsContainer/>
        </ProductsContainer>
    }
}

export default Products;