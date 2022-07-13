import React from 'react'
import * as S from './styles'
import Slider from "react-slick"
import { useDataUsers } from 'hooks/useDataUsers'
import { useStateCard } from 'hooks/useStateCard'
import { useRouter } from 'next/router'

export default function MenuMonth() {
  const { setCurrentMonth } = useDataUsers()
  const { color, dayCard } = useStateCard()
  const router = useRouter();
  const { id } = router.query
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

  const handleMonth = (numberMonth = 1) => {
    setCurrentMonth(numberMonth);
  }


  React.useEffect(() => {
      if(id) {
        dayCard(String(id))
      }
  }, [handleMonth])
  
  return (
    <>
      <S.MenuMonthUl bg={color}>
        <Slider {...settings}>
          {months.map((item, index) => 
            <S.MenuMonthLi key={String(index)} id={item}>{item}</S.MenuMonthLi> 
          )}
        </Slider>
      </S.MenuMonthUl>
      <S.ArrowMont bg={color}/>
    </>
  )
}