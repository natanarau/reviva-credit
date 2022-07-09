import React from 'react'
import * as S from './styles'
import Slider from "react-slick"
import Card from 'components/complex/card';
import { useDataUsers } from 'hooks/useDataUsers'
import Loading from 'components/simple/Loading';

export default function CardSlider() {
  const { listCards, setCardCheck, cardCheck } = useDataUsers()

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    afterChange: function(index: number) {
      handleCard(index)
    }
  };
  
  const handleCard = (index: number) => {
    const unCard = listCards.find((item, indexCard) => index === indexCard && item)
    setCardCheck(unCard?.id)
  }

  React.useEffect(() => {
    if(cardCheck === undefined) {
      const card0Index = listCards.find((item, indexCard) => indexCard === 0 && item)
      setCardCheck(card0Index?.id)
    }
  }, [listCards])

  return (
      <>
        <S.CardMenu >
        <Slider {...settings}>
          {listCards?.map((item) =>
            <Card key={item.id} />
          )}
        </Slider>
        </S.CardMenu>
      </>
  )
}