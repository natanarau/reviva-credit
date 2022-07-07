import React from 'react'
import * as S from './styles'

type Props = {}

export default function ProgressBar({}: Props) {
  return (
    <>
      <S.TextH3>Seu <S.Strong>Limite</S.Strong></S.TextH3>
      <S.Progress/>
    </>
  )
}