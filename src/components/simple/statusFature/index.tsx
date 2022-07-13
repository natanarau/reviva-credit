import * as S from './styles'


export default function StatusFature() {
    return (
        <S.status>
            <S.statusTotal>
                <S.contentStatusTotal>
                    <p>Total:</p>
                    <S.contentStatus>R$ 3500,00</S.contentStatus>
                </S.contentStatusTotal>
                <S.total>
                    <p>Vencimento:</p>
                    <S.contentStatus>08/02</S.contentStatus>
                </S.total>
            </S.statusTotal>
            <S.statusFature>
                <S.textStatusFature>Status:</S.textStatusFature>
                <S.contentStatus>Fechada</S.contentStatus>
            </S.statusFature>
        </S.status>
    );
}