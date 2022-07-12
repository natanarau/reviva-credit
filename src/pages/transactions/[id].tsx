import Header from "components/complex/Header";
import StatusFature from 'components/simple/statusFature';
import MenuMonth from 'components/complex/MenuMonth';
import MonthTransactions from "components/simple/MonthTransactions";
import Menu from "components/complex/MenuFooter";
import CardDetails from "components/simple/cardDetails";
import { Background } from "./styles";
import { useRouter } from "next/router";

export default function Transactions() {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <>
      <Header />
      <CardDetails />
      <StatusFature />
      <Background>
        <MenuMonth />
        <MonthTransactions idCard={String(id)} />
        <Menu idCard={String(id)}/>
      </Background>
    </>
  )
}