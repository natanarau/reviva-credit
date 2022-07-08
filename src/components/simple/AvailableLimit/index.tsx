import React from 'react'
import * as S from './styled'

type Props = {}

export default function AvailableLimit({}: Props) {
  return (
    <>
    <S.BoxLimitAvailable>
      <S.TextP>Disponível</S.TextP>
      <S.TextP>R$ 3.500,00</S.TextP>
    </S.BoxLimitAvailable>
    </>
  )
}