import styled from "styled-components";


interface Attributes {
    width: string,
    height: string,
    borderRadius: string
}

export const card = styled.section<Attributes>`
    background: #3A8BEB;
    border-radius: ${props => props.borderRadius };
    height: ${props => props.height };
    
    margin-left: auto;
    margin-right: auto; 
    width: ${props => props.width };   
`;
