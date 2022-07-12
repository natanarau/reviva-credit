import React from 'react'
import * as S from './styles'
import { useDataUsers } from 'hooks/useDataUsers'
import Loading from 'components/simple/Loading'

export default function Header() {
  const { listUser } = useDataUsers()
  const dataUser = listUser && listUser.find(e => e)
  return (
    <>
      <S.HeaderWrapper>
        <S.HelloText>
          <S.H2>Olá <S.Strong>{!dataUser ? <Loading/> : dataUser?.name}</S.Strong></S.H2>
          <S.H2>Bem vindo ao <S.Strong>Reviva Credit</S.Strong></S.H2>
        </S.HelloText>
        <S.HeaderImg src="/image/header_img.png" alt="semicírculo azul" />
      </S.HeaderWrapper>
    </>
  )
}