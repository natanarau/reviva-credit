import React from 'react'
import * as S from './styles'

interface HeaderProps {
  nome: String | undefined;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <S.HeaderWrapper>
        <S.HelloText>
          <S.H2>Olá <S.Strong>{props.nome}</S.Strong></S.H2>
          <S.H2>Bem vindo ao <S.Strong>Reviva Credit</S.Strong></S.H2>
        </S.HelloText>
        <S.HeaderImg src="/header_img.png" alt="semicírculo azul" />
      </S.HeaderWrapper>
    </>
  )
}