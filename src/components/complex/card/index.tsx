import Loading from 'components/simple/Loading';
import { useDataUsers } from 'hooks/useDataUsers';
import React from 'react';
import * as S from './styles'

interface CardProps {
    numberCard: number;
    expCard: string;
    cvv: number;
    index: number;
    brand: string;
}

export default function Card(props: CardProps) {
    const { cardCheck, listUser } = useDataUsers();
    const userCard = listUser.find(user => user);
    const colors = ['#3B2C35', '#3A8BEB', '#06D6A0'].find((item, index) => index === props.index);   

    return (
        <>
            {!cardCheck ? <Loading /> :
                <S.card bg={`${colors}`} width={"19rem"} height={"12rem"} borderRadius={"1.5rem"} >
                    <S.contentCard>
                        <S.titleCard>Reviva Credit</S.titleCard>
                        <S.contentClientCard>
                            <S.nameCard>{userCard?.name}</S.nameCard>
                            <S.flagCard>
                                <S.numberCard>{String(props.numberCard).substring(0,4)} {String(props.numberCard).substring(4,8)} {String(props.numberCard).substring(8,12)} {String(props.numberCard).substring(12,16)}</S.numberCard>
                                <S.containerFlag>
                                    <S.flag src={`/image/${props.brand}.svg`} />
                                </S.containerFlag>
                            </S.flagCard>
                            <S.dataCard>
                                <S.TextP>{props.expCard?.substring(8,10)}/{props.expCard.substring(5, 7)}/{props.expCard?.substring(2, 4)}</S.TextP>
                                <S.TextP>{props.cvv}</S.TextP>
                            </S.dataCard>
                        </S.contentClientCard>
                    </S.contentCard>
                </S.card>
            }
        </>
    );
}