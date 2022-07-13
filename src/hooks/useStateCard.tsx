import React from 'react'

export const useStateCard = () => {
  const [stateCard, setStateCard] = React.useState<string>()
  const [color, serColor] = React.useState<string>()

  const date = new Date();
  const day = Number(date.getDate());
  const dayCard = (dayCard: number) => {
  const cardTurnedOver = dayCard && dayCard - 5
    if (cardTurnedOver && day >= cardTurnedOver && day < dayCard) {
      setStateCard('Fechado')
      serColor('#E83151')
      console.log(setStateCard, date);
    } else if (cardTurnedOver && day > dayCard) {
      setStateCard('Pago')
      serColor('#CDCDCD')
      console.log('Pago', day);
    } else if (cardTurnedOver && day < cardTurnedOver) {
      setStateCard('Aberto')
      serColor('#06D6A0')
      console.log('Aberto', day);
    }
  }

  return { setStateCard, stateCard, dayCard, color, day, date }
}