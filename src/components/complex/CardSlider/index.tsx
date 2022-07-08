import React from 'react'
import * as S from './styles'
import Slider from "react-slick"
import Card from 'components/complex/card';
import { useEffect, useState } from "react";

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

  const [cards, setCards] = useState<String[]>();
  
  useEffect(() => {
    fetch('https://reviva-credit-api.herokuapp.com/cards')
      .then(response => response.json())
      .then(responseData => {
        setCards(responseData)
      })
  }, []);

  return (
      <>
        <S.CardMenu >
        <Slider {...settings}>
          {cards?.map((item, index) =>
            <Card key={index} />
          )}
        </Slider>
        </S.CardMenu>
      </>
  )
}