import Menu from '../components/complex/MenuFooter/index';
import * as S from './styles'

interface TemplateProps {
  children: React.ReactNode;
  idCard?: string;
}

export default function Template(props: TemplateProps) {
  return (
    <S.Template>
        {props.children}
        <Menu/>
    </S.Template>
  )
}