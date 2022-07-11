import React from 'react'
import * as S from './styled'

interface AvalableProps {
  available: number
}

export default function AvailableLimit(props: AvalableProps) {
  return (
    <>
    <S.BoxLimitAvailable>
      <S.TextP>Disponível</S.TextP>
      <S.TextP>R$ {props.available.toFixed(2).replace('.', ',')}</S.TextP>
    </S.BoxLimitAvailable>
    </>
  )
}