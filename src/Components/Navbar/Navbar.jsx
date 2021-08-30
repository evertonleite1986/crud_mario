import logo from './logomario.png';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <S.Navbar>
      <Link to="/">
        <S.Img src={logo} alt="Mario" />
      </Link>

      <S.List>
        <S.ListItem>
          <S.LinkedPage to="/">Início</S.LinkedPage>
        </S.ListItem>

        <S.ListItem>
          <S.LinkedPage to="/create">Criar</S.LinkedPage>
        </S.ListItem>

        <S.ListItem>
          <S.LinkedPage to="/deleteall">Deletar Tudo</S.LinkedPage>
        </S.ListItem>

        <S.ListItem>
          <S.LinkedPage to="/about">Sobre</S.LinkedPage>
        </S.ListItem>
      </S.List>
    </S.Navbar>
    )
}