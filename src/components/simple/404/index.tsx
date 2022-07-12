import React from 'react'
import * as S from './styles'

export default function NotFound() {
  return (
    <>
    
    <S.Box404>
      <S.Image404 src='../image/header_img.png' />
      <S.Strong>404</S.Strong>
      <S.Text404>Página não encontrada</S.Text404>
    </S.Box404>
    </>
  )
}