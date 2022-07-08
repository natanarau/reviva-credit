import { Menu } from 'components/complex/MenuFooter';
import * as S from './styles'

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template(props: TemplateProps) {
  return (
    <S.Template>
        {props.children}
        <Menu />
    </S.Template>
  )
}