import React from 'react'
import * as S from './styles'

interface progressProps {
  progress: number
}

export default function ProgressBar(props: progressProps) {
  return (
    <>
      <S.TextH3>Seu <S.Strong>Limite</S.Strong></S.TextH3>
      <S.Progress progress={props.progress}/>
    </>
  )
}