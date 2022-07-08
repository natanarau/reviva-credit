import React from 'react'
import * as S from './styled'

type Props = {}

export default function LimitedUsed({}: Props) {
  return (
    <>
    <S.BoxLimitUsed>
      <S.TextP>Utilizado</S.TextP>
      <S.TextP>R$ 3.500,00</S.TextP>
    </S.BoxLimitUsed>
      
    </>
  )
}