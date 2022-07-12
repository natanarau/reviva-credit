import * as S from './styles'
import { useDataUsers } from 'hooks/useDataUsers';

interface MonthProps{
  idCard: string
}

export default function MonthTransactions(props: MonthProps) {
  const { listTransactions, currentMonth = 1 } = useDataUsers();
  const transactions = listTransactions.filter(transaction => transaction.cardId == props.idCard);
  const monthTransactions = transactions.filter(transaction => transaction.date.substring(6, 7) == currentMonth?.toString());
  console.log("#######", props.idCard, transactions, currentMonth, listTransactions, monthTransactions)

  return (
    <>
      {monthTransactions.map((item) =>
        <S.Main key={item.id}>
        <S.Wrapper>
            <S.TextHeader>{item.date.substring(8,10)}/{item.date.substring(5, 7)}</S.TextHeader>
          <S.TextHeader>Pagamento</S.TextHeader>
        </S.Wrapper>
        <S.Wrapper>
            <S.TextContent>{item.description}</S.TextContent>
            <S.TextContent>-{item.value.toFixed(2).replace('.',',')}</S.TextContent>
        </S.Wrapper>
        <S.Line />
        </S.Main>
      )}
    </>
);
}