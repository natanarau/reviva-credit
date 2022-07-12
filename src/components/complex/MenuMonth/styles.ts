import styled from "styled-components";

interface MonthProps {
  bg?: string
}

export const MenuMonthUl = styled.ul<MonthProps>`
  margin: 0;
  padding: 0;
  padding: .75rem 0;
  background-color: ${props => props.bg};
  overflow: overlay;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const MenuMonthLi = styled.li `
  font-size: 1.12rem;
  color: #FFFFFF;
`
export const ArrowMont = styled.div<MonthProps>`
  display: block;
  margin: auto;
  width: 0; 
  height: 0; 
  border-left: 1.25rem solid transparent;
  border-right: 1.25rem solid transparent;
  border-top: 1.25rem solid ${props => props.bg};
`