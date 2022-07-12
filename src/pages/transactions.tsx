import Header from "components/complex/Header";
import StatusFature from 'components/simple/statusFature';
import MenuMonth from 'components/complex/MenuMonth';
import MonthTransactions from "components/simple/MonthTransactions";
import styled from "styled-components";
import { Menu } from "components/complex/MenuFooter";
import CardDetails from "components/simple/cardDetails";
import { useDataUsers } from "hooks/useDataUsers";
import Loading from "components/simple/Loading";
import React from "react";

export const Background = styled.div`
  width: 375px;
  height: 812px;
  background: #3A8BEB; 
`

export default function Transactions() {
  const { listCards, cardCheck, listTransactions } = useDataUsers();
  const transactions:any = listTransactions.find(item => item.cardId === cardCheck);
  const card:any = listCards.find(item => item.id === cardCheck);
  const limitUsed = (transactions?.value / card?.limit) * 100;
  const available = card?.limit - transactions?.value;

  return (
    <>
      <Header />
      <CardDetails />
      <StatusFature used={transactions?.value} />
      <Background>
        <MenuMonth />
        <MonthTransactions />
        <Menu />
      </Background>
    </>
  )
}