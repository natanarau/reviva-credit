import React from 'react'
import HeaderTransactions from "components/complex/HeaderTransactions";
import StatusFature from 'components/simple/statusFature';
import MenuMonth from 'components/complex/MenuMonth';
import MonthTransactions from "components/simple/MonthTransactions";
import Menu from "components/complex/MenuFooter";
import CardDetails from "components/simple/cardDetails";
import { useRouter } from "next/router";
import styled from "styled-components";

export const TransactionsBackground = styled.div`
  width: 375px;
  height: 812px;
  background: #3A8BEB; 
`

export default function Transactions() {
  const router = useRouter()
  const { id } = router.query
 
  return (
    <>
      <HeaderTransactions />
      <CardDetails />
      <StatusFature />
      <TransactionsBackground>
        <MenuMonth />
        <MonthTransactions idCard={String(id)} />
        <Menu />
      </TransactionsBackground>
    </>
  )
}