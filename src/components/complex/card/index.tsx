import ContentCard from 'components/simple/contentCard';
import * as S from './styles'

interface cardProps {
    width: string;
    height: string;
    borderRadius: string;
}

export default function Card(props: cardProps) {
    return (
        <S.card width ={"19rem"} height ={"12rem"} borderRadius ={"1.5rem"} >
            <ContentCard />
        </S.card>
    );
}