import * as S from './styles'


export default function StatusFature() {
    return (
        <S.status>
            <S.statusTotal>
                <S.total>Total: R$ 3500,00</S.total>
                <S.total>Vencimento: 08/02</S.total>
            </S.statusTotal>
            <S.statusFature>
                <S.textStatusFature>Status: Fechada</S.textStatusFature>
            </S.statusFature>
        </S.status>
    );
}