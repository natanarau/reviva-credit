import React from 'react'
import * as S from './styles'
import ProgressBar from 'components/simple/ProgressBar'
import LimitUsed from 'components/simple/LimitUsed'
import AvailableLimit from 'components/simple/AvailableLimit'
import { useDataUsers } from 'hooks/useDataUsers'

export default function LimitCard() {
  const { listCards, cardCheck, listTransactions } = useDataUsers()
  const transactions:any = listTransactions.find(item => item.cardId === cardCheck)
  const card:any = listCards.find(item => item.id === cardCheck)
  const limitUsed = (transactions?.value / card?.limit) * 100
  const available = card?.limit - transactions?.value
  
  return (
    <>
      <S.BoxProgress>
        <ProgressBar progress={limitUsed}/>
        <S.BoxLimitValue>
          <LimitUsed used={transactions?.value}/>
          <AvailableLimit available={available} />
        </S.BoxLimitValue>
      </S.BoxProgress>
    </>
  )
}