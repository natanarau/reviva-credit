import Header from "components/complex/Header";
import Template from "templates/index";
import StatusFature from 'components/simple/statusFature';
import MenuMonth from 'components/complex/MenuMoth';
import MonthTransactions from "components/simple/MonthTransactions";

export default function Transactions() {
  return (
    <>
      <Template>
        <>
          <Header/>
          {/* <StatusFature /> */}
          <MenuMonth />
          <MonthTransactions/>
        </>
      </Template>
    </>
  )
}