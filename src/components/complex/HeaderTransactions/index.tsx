import React from 'react'
import * as S from './styles'
import { useDataUsers } from 'hooks/useDataUsers'
import Loading from 'components/simple/Loading'

export default function HeaderTransactions() {
  return (
    <>
      <S.HeaderWrapper>
        <S.HelloText>
          <S.H2>Minhas</S.H2>
          <S.H2><S.Strong>Movimentações</S.Strong></S.H2>
        </S.HelloText>
        <S.HeaderImg src="/image/header_img.png" alt="semicírculo azul" />
      </S.HeaderWrapper>
    </>
  )
}