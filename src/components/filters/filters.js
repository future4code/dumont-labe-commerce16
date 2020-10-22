import React from "react"   
import styled from 'styled-components';

const FiltersContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 7vh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.label`
    display: flex;
    padding: 0 2vw;
`;

class Filters extends React.Component {
    render () {
        return <FiltersContainer>
            
            <div>
                <InputContainer>
                    Valor mínimo:
                    <input type='number'/>                    
                </InputContainer>
            </div>

            <div>
                <InputContainer>
                    Valor Máximo:
                    <input type='number'/>                    
                </InputContainer>
            </div>

            <div>
                <InputContainer>
                    Buscar por nome:
                    <input type='text'/>                    
                </InputContainer>
            </div>



        </FiltersContainer>
    }
}

export default Filters;