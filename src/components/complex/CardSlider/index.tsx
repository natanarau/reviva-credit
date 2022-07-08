import React from 'react'
import * as S from './styles'
import Slider from "react-slick"
import Card from 'components/complex/card';

export default function CardSlider() {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    afterChange: function(index: number) {
      const numberCard = index + 1;
      handleCard(numberCard)
    }
  };

  const handleCard = (numberCard: number) => {
      console.log(numberCard)
  }
  
  return (
      <>
        <S.CardMenu >
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
          </Slider>
        </S.CardMenu>
      </>
  )
}