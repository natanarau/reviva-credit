import { useDataUsers } from 'hooks/useDataUsers'
import { useRouter } from 'next/router';
import * as S from './styles'

export default function StatusFature() {
    const router = useRouter()
    const {id} = router.query
    const { currentMonth = 1, cardState, listCardAll } = useDataUsers()
    const dueCard = listCardAll?.find(item => item.id === id)?.dueDate
    return (
        <S.status>
            <S.statusTotal>
                <S.contentStatusTotal>
                    <p>Total:</p>
                    <S.contentStatus>R$ 0</S.contentStatus>
                </S.contentStatusTotal>
                <S.total>
                    <S.TextP>Vencimento:</S.TextP>
                    <S.contentStatus>{`${dueCard}/${currentMonth}`}</S.contentStatus>
                </S.total>
            </S.statusTotal>
            <S.statusFature>
                <S.textStatusFature>Status:</S.textStatusFature>
                <S.contentStatus>{cardState}</S.contentStatus>
            </S.statusFature>
        </S.status>
    );
}