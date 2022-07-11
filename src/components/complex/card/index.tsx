import Loading from 'components/simple/Loading';
import { useDataUsers } from 'hooks/useDataUsers';
import * as S from './styles'

interface CardProps {
    numberCard: number;
    expCard: string;
    cvv: number
    index: number
}

export default function Card(props: CardProps) {
    const { cardCheck, listUser } = useDataUsers()
    const userCard = listUser.find(user => user)
    const colors = ['#3B2C35', '#3A8BEB', '#06D6A0'].find((item, index) => index === props.index)

    return (
        <>
        {!cardCheck ? <Loading/> :
            <S.card bg={`${colors}`}>
                <S.contentCard>
                    <S.titleCard>Reviva Credit</S.titleCard>
                    <S.contentClientCard>
                        <S.nameCard>{userCard?.name}</S.nameCard>
                        <S.flagCard>
                            <S.numberCard>{props.numberCard}</S.numberCard>
                            <S.containerFlag>
                                <S.flag src='/image/LogoCartao.png' />
                            </S.containerFlag>
                        </S.flagCard>
                        <S.dataCard>
                            <S.TextP>16/05/26</S.TextP>
                            <S.TextP>{props.cvv}</S.TextP>
                        </S.dataCard>
                    </S.contentClientCard>
                </S.contentCard>
            </S.card>
            }
        </>
    );
}