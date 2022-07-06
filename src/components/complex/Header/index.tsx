import React from 'react'
import {HeaderWrapper, HelloText, H2} from './styles'

interface HeaderProps {
  nome: String;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <HeaderWrapper>
        <HelloText>
          <H2>Olá {props.nome}</H2>
          <H2>Bem vindo ao Reviva Credit</H2>
        </HelloText>
        <img src="/header_img.png" alt="semicírculo azul" />
      </HeaderWrapper>
    </>
  )
}