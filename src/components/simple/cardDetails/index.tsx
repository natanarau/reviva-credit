import Loading from 'components/simple/Loading';
import { useDataUsers } from 'hooks/useDataUsers';
import * as S from '../../complex/card/styles';
import * as A from '../contentCard/styles';

// interface cardProps {
//     borderRadius: string;
//     height: string;
//     width: string;

// }

export default function CardDetails() {
    const { cardCheck, listCards, listUser } = useDataUsers();
    const unCard = listCards.find((item) => item.id === cardCheck);
    const userCard = listUser.find((user) => user);
    return (
        <>
            <A.contentCardDetails>
                <><S.card width={"6.3rem"} height={"3.7rem"} borderRadius={"0.5rem"}>
                    <A.containerFlag alignItems={"center"} flexDirection={"none"} height={"4em"} justifyContent={"center"}>
                        <A.flag src='/image/LogoCartao.png' />
                    </A.containerFlag>
                </S.card>
                    <A.contentClientCard>
                        <A.nameCard color = {"#000000"}>{userCard?.name}</A.nameCard>
                        <A.numberCard color = {"#000000"}>{unCard?.number}</A.numberCard>
                    </A.contentClientCard></>
            </A.contentCardDetails>
        </>
    );
} 