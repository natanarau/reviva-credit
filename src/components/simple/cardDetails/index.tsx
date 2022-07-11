import * as S from '../../complex/card/styles';
import * as A from '../contentCard/styles';

interface cardProps {
    width: string;
    height: string;
    borderRadius: string;
}

export default function CardDetails(props: cardProps) {
    return (
        <S.card width ={"6.3rem"} height ={"3.7rem"} borderRadius ={"0.5rem"} >
            <A.containerFlag>
                <A.flag src='/image/LogoCartao.png' />
            </A.containerFlag>
        </S.card>
    );
} 