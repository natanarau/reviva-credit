import * as S from './styles'
import { useDataUsers } from 'hooks/useDataUsers';
import Loading from 'components/simple/Loading';

export default function ContentCard() {
    const { cardCheck, listCards, listUser } = useDataUsers()
    const unCard = listCards.find(item => item.id === cardCheck)
    const userCard = listUser.find(user => user)
    return (
        <>
            {!cardCheck ? <Loading /> :
                <S.contentCard>
                    <S.titleCard>Reviva Credit</S.titleCard>
                    <S.contentClientCard>
                        <S.nameCard color = {"#FFFFFF"}>{userCard?.name}</S.nameCard>
                        <S.flagCard>
                            <S.numberCard color = {"#FFFFFF"}>{unCard?.number}</S.numberCard>
                            <S.containerFlag alignItems={"none"} flexDirection={"row-reverse"} height={"10em"} justifyContent={"none"}>
                                <S.flag src='/image/visa.svg' />
                            </S.containerFlag>
                        </S.flagCard>
                        <S.dataCard>
                            <p>16/05/26</p>
                            <p>{unCard?.cvv}</p>
                        </S.dataCard>
                    </S.contentClientCard>
                </S.contentCard>
            }
        </>

    );
}