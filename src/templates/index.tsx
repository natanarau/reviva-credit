import LastTransactions from 'components/simple/LastestTransactions';
import Menu from 'components/complex/MenuFooter';
import * as S from './styles'

interface TemplateProps {
  children: React.ReactNode;
  idCard?: string;
}

export default function Template(props: TemplateProps) {
  return (
    <S.Template>
        {props.children}
        <LastTransactions idCard={props.idCard} />
        <Menu idCard={props.idCard}/>
    </S.Template>
  )
}