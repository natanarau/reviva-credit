import * as S from './styles'


export default function ContentCard() {
    return (
        <S.contentCard>
            <S.titleCard>Reviva Credit</S.titleCard>
            <S.contentClientCard>
                <S.nameCard>Renato Neto</S.nameCard>
                <S.flagCard>
                    <S.numberCard>5233 3493 4772 7801</S.numberCard>
                    <S.containerFlag>
                        <S.flag src='/image/LogoCartao.png' />
                    </S.containerFlag>
                </S.flagCard>
                <S.dataCard>
                    <p>16/05/26</p>
                    <p>901</p>
                </S.dataCard>
            </S.contentClientCard>
        </S.contentCard>
    );
}