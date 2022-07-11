import styled from "styled-components";

interface Attributes {
    alignItems: string,
    height: string,
    flexDirection: string,    
    justifyContent: string,
}
interface AttributesText {
    color: string
}
export const contentCard = styled.div`
    align-content: space-between;
    color: #FFFFFF;    
    height: 8.7rem;
    margin-left: 1rem;
    display: grid; 
    grid-template-rows: 6rem auto auto auto;   
`;

export const titleCard = styled.h2`
    font-style: normal;    
    font-weight: 700;
    font-size: 1.5rem;
    height: 1rem;
    line-height: 3.8rem;
`;

export const contentClientCard = styled.div`
    height: 4.2rem;
    width: 11rem;   
`;
export const nameCard = styled.h4<AttributesText>`
    color: ${props => props.color };
    width: 6.7rem;
    height: 1.3rem;
    left: 3.3rem;
    top: 13.25rem;

    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.4rem;
`;

export const flagCard = styled.div`
    display: grid;
    grid-template-columns: 12rem 4rem;
`;

export const numberCard = styled.p<AttributesText>`
    color: ${props => props.color };
    width: 11rem;
    height: 1.2rem;
    left: 3.3rem;
    top: 15rem;

    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const dataCard = styled.div`
    display: flex;
    height: 1.2rem;
    justify-content: space-between;
    line-height: 0rem;
    width: 11rem;
`;

export const containerFlag = styled.figure<Attributes>`
    align-items:${props => props.alignItems };
    display: flex;
    flex-direction: ${props => props.flexDirection };
    height: ${props => props.height };    
    justify-content: ${props => props.justifyContent };
`;
export const flag = styled.img`
    height: 2.2rem;
    width: 2.9rem;
`;

export const contentCardDetails = styled.div`
    display: flex;
    width: 52%;
`;