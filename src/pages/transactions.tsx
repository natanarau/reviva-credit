import Header from "components/complex/Header";
import StatusFature from 'components/simple/statusFature';
import MenuMonth from 'components/complex/MenuMoth';
import MonthTransactions from "components/simple/MonthTransactions";
import styled from "styled-components";
import { Menu } from "components/complex/MenuFooter";
import CardDetails from "components/simple/cardDetails";

export const Background = styled.div`
  width: 375px;
  height: 812px;
  background: #3A8BEB; 
`

export default function Transactions() {
  return (
    <>
      <Header />
      <CardDetails />
      <StatusFature />
      <Background>
        <MenuMonth />
        <MonthTransactions />
        <Menu />
      </Background>
    </>
  )
}