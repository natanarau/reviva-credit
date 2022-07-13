import React from 'react'
import Header from "components/complex/Header";
import StatusFature from 'components/simple/statusFature';
import MenuMonth from 'components/complex/MenuMonth';
import MonthTransactions from "components/simple/MonthTransactions";
import Menu from "components/complex/MenuFooter";
import CardDetails from "components/simple/cardDetails";
//import * as S from './styles'
import { useRouter } from "next/router";

import styled from "styled-components";
import { useDataUsers } from 'hooks/useDataUsers';

export const TransactionsBackground = styled.div`
  width: 375px;
  height: 812px;
  background: #3A8BEB; 
`

export default function Transactions() {
  const { listCards, cardCheck, listTransactions } = useDataUsers();
  const transactions:any = listTransactions.find(item => item.cardId === cardCheck);
  const card:any = listCards.find(item => item.id === cardCheck);
  const router = useRouter()
  const { id } = router.query
  
  return (
    <>
      <Header />
      <CardDetails />
      <StatusFature used={transactions?.value} />
      <TransactionsBackground>
        <MenuMonth />
        <MonthTransactions idCard={String(id)} />
        <Menu idCard={String(id)}/>
      </TransactionsBackground>
    </>
  )
}