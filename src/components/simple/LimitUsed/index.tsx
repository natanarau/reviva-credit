import React from 'react'
import * as S from './styled'

interface UsedProps {
  used: number
}

export default function LimitUsed(props: UsedProps) {
  return (
    <>
    <S.BoxLimitUsed>
      <S.TextP>Utilizado</S.TextP>
      <S.TextP>R$ {props.used?.toFixed(2).replace('.', ',')}</S.TextP>
    </S.BoxLimitUsed>
      
    </>
  )
}