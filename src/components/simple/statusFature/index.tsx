import { useDataUsers } from 'hooks/useDataUsers'
import * as S from './styles'

interface UsedProps {
    used: number
}

export default function StatusFature() {
    const { currentMonth = 1, cardState } = useDataUsers()
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