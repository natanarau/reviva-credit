import { Menu } from 'components/complex/MenuFooter';
import { CardProvider } from 'contexts/cardContests';
import * as S from './styles'

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template(props: TemplateProps) {
  return (
    <S.Template>
      <CardProvider >
        {props.children}
        <Menu />
      </CardProvider>
    </S.Template>
  )
}