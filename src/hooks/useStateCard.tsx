import { useDataUsers } from 'hooks/useDataUsers'
import React from 'react'

export const useStateCard = () => {
  const [stateCard, setStateCard] = React.useState<string>()
  const [color, serColor] = React.useState<string>()
  const [dueDate, setdueDate] = React.useState<number>()
  const { currentMonth = 1, listCardAll, setCardState } = useDataUsers()
  const date = new Date();
  const day = Number(date.getDate());
  const month = Number(date.getMonth() + 1);

  const dayCard = (id: string) => {
    listCardAll && listCardAll.find(item => item.id === id && setdueDate(item.dueDate))
    const cardTurnedOver = dueDate && dueDate - 5
    if (cardTurnedOver && day >= cardTurnedOver && day < dueDate && currentMonth === month) {
      setCardState('Fechado')
      serColor('#E83151')
    } else if (cardTurnedOver && currentMonth < month) {
      setCardState('Pago')
      serColor('#CDCDCD')
    } else if (cardTurnedOver && day < cardTurnedOver) {
      setCardState('Aberto')
      serColor('#06D6A0')
    } else if (cardTurnedOver && month < currentMonth) {
      setCardState('Aberto')
      serColor('#06D6A0')
    }
  }

  return { setStateCard, stateCard, dayCard, color, day, date }
}