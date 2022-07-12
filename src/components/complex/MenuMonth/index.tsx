import React from 'react'
import * as S from './styles'
import Slider from "react-slick"
import { useDataUsers } from 'hooks/useDataUsers'
import { useStateCard } from 'hooks/useStateCard'

export default function MenuMonth() {
  const { setCurrentMonth, listCards, cardCheck } = useDataUsers()
  const { color, dayCard } = useStateCard()

  const months = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ]

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    afterChange: function(index: number) {
      const numberMonth = index + 1;
      handleMonth(numberMonth)
    }
  }; 

  const handleMonth = (numberMonth: number) => {
    setCurrentMonth(numberMonth);
  }

  React.useEffect(() => {
    const cardSelected = listCards.find(item => item.id === cardCheck)?.dueDate
    if(cardSelected) {
      dayCard(cardSelected)
    }
  }, [])
  
  return (
    <>
      <S.MenuMonthUl bg={color}>
        <Slider {...settings}>
          {months.map((item, index) => 
            <S.MenuMonthLi key={index} id={item}>{item}</S.MenuMonthLi> 
          )}
        </Slider>
      </S.MenuMonthUl>
      <S.ArrowMont bg={color}/>
    </>
  )
}