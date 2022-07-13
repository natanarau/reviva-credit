import { useStateCard } from 'hooks/useStateCard'
import { useDataUsers } from 'hooks/useDataUsers'
import { useRouter } from 'next/router'
import * as S from './styles'


export default function StatusFature() {

    const router = useRouter()
    const { id } = router.query
    const { listCardAll } = useDataUsers()
    const dueCard = listCardAll && listCardAll.find(item => item.id === id)?.dueDate
    const { stateCard } = useStateCard()
    return (
        <S.status>
            <S.statusTotal>
                <S.contentStatusTotal>
                    <p>Total:</p>
                    <S.contentStatus>R$ 3500,00</S.contentStatus>
                </S.contentStatusTotal>
                <S.total>
                    <S.TextP>Vencimento:</S.TextP>
                    <S.contentStatus>{`${dueCard}/22`}</S.contentStatus>
                </S.total>
            </S.statusTotal>
            <S.statusFature>
                <S.textStatusFature>Status:</S.textStatusFature>
                <S.contentStatus>Fechada</S.contentStatus>
            </S.statusFature>
        </S.status>
    );
}