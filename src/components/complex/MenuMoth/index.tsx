import React from 'react'
import * as S from './styles'
import Slider from "react-slick"

export default function MenuMonth() {
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
    console.log(numberMonth)
  }

  return (
    <>
      <S.MenuMonthUl >
        <Slider {...settings}>
          {months.map((item, index) => 
            <S.MenuMonthLi key={index} id={item}>{item}</S.MenuMonthLi> 
          )}
        </Slider>
      </S.MenuMonthUl>
      <S.ArrowMont src='../img/arrowMonth.svg' />
    </>
  )
}