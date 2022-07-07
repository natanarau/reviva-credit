import React from 'react'
import * as S from './styles'
import ProgressBar from 'components/simple/ProgressBar'
import LimitedUsed from 'components/simple/LimitedUsed'
import AvailableLimit from 'components/simple/AvailableLimit'

type Props = {}

export default function LimitCard({}: Props) {
  return (
    <>
      <S.BoxProgress>
        <ProgressBar />
        <S.BoxLimitValue>
          <LimitedUsed/>
          <AvailableLimit/>
        </S.BoxLimitValue>
      </S.BoxProgress>
    </>
  )
}