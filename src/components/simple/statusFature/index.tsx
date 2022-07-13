import { useStateCard } from 'hooks/useStateCard'
import * as S from './styles'

interface UsedProps {
    used: number
}

export default function StatusFature(props: UsedProps) {
    const { day , date, stateCard } = useStateCard();
    let dat = date.getMonth();
    console.log(stateCard);
    return (
        <S.status>
            <S.statusTotal>
                <S.contentStatusTotal>
                    <S.TextP>Total:</S.TextP>
                    <S.contentStatus>R$ {props.used?.toFixed(2).replace('.', ',')}</S.contentStatus>
                </S.contentStatusTotal>
                <S.total>
                    <S.TextP>Vencimento:</S.TextP>
                    <S.contentStatus>{day}/0{dat}</S.contentStatus>
                </S.total>
            </S.statusTotal>
            <S.statusFature>
                <S.textStatusFature>Status:</S.textStatusFature>
                <S.contentStatus>{stateCard}</S.contentStatus>
            </S.statusFature>
        </S.status>
    );
}