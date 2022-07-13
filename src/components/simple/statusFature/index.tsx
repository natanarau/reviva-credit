import { useStateCard } from 'hooks/useStateCard'
import { useDataUsers } from 'hooks/useDataUsers'
import { useRouter } from 'next/router'
import * as S from './styles'

interface UsedProps {
    used: number
}

export default function StatusFature() {
    const router = useRouter()
    const { id } = router.query
    const { currentMonth, cardState } = useDataUsers()
    const { stateCard } = useStateCard()
    return (
        <S.status>
            <S.statusTotal>
                <S.contentStatusTotal>
                    <S.TextP>Total:</S.TextP>
                    <S.contentStatus>R$ </S.contentStatus>
                </S.contentStatusTotal>
                <S.total>
                    <S.TextP>Vencimento:</S.TextP>
                    <S.contentStatus>{`${currentMonth}/22`}</S.contentStatus>
                </S.total>
            </S.statusTotal>
            <S.statusFature>
                <S.textStatusFature>Status:</S.textStatusFature>
                <S.contentStatus>{cardState}</S.contentStatus>
            </S.statusFature>
        </S.status>
    );
}