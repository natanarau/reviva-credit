import { useDataUsers } from "hooks/useDataUsers";
import { useMemo } from "react";
import * as S from "./styles";

interface LastestTransactionsProps {
  idCard?: string;
}

function order(listToOrder: any[]) {


  let datesOrderByMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (item, index) => {
      let monthNumber = index + 1;
      let respectiveMonthIndex = listToOrder.filter(
        (i) => new Date(i.date).getMonth() + 1 === monthNumber
      );

      return respectiveMonthIndex;
    }
  );

  function bubbleSort(items: any[]) {
    var length = items.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        var jValueCrr = new Date(items[j].date).getDate();
        var jValueNext = new Date(items[j + 1].date).getDate();
        if (jValueCrr > jValueNext) {
          var tmp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = tmp;
        }
      }
    }
    return items;
  }

  return datesOrderByMonth
    .map((orderByMonth) => {
      const dates = orderByMonth;

      return bubbleSort(dates);
    })
    .flatMap((dates) => [...dates]);
}

export default function LastTransactions(props: LastestTransactionsProps) {
  const { listTransactions, cardCheck } = useDataUsers();
  const lastTransactions = useMemo(() => {
    const transactions = listTransactions.filter(
      (transaction) => transaction.cardId == cardCheck
    );
    console.log(transactions, cardCheck)
    const orderedTransactions = order(transactions);
    return orderedTransactions.slice(
      orderedTransactions.length - 6,
      orderedTransactions.length - 1
    ).reverse();
  }, [listTransactions, cardCheck]);
  console.log(lastTransactions, listTransactions);
  return (
  <>
    <S.LastWrapper>
      <S.DivWrapper>
        <p>Ultimas</p>
        <p><strong>Movimentações</strong></p>
        {lastTransactions.map((item, index) => 
          <S.DivMonthDay key={index}>
            <div>
              <p>{item.date.substring(8,10)}/{item.date.substring(5, 7)}</p>
              <p>{item.description}</p>
            </div>
            <div>
              <p>Pagamentos</p>
              <p>{item.value.toFixed(2).replace('.',',')}</p>
            </div>
          </S.DivMonthDay>
        )}
      </S.DivWrapper>
    </S.LastWrapper>
  </>
  )
}
