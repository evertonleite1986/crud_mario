import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router';

export default function DeleteAll() {
  const history = useHistory();

  const goToHome = () => {
    history.push('/');
  };

  const clickHandler = async (event) => {
    event.preventDefault();

    await Api.buildApiDeleteRequest(Api.deleteAllUrl()).catch((e) => {
      console.error('Erro ao tentar deletar todo os dados: ', e);
    });

    goToHome();
  };

  return (
        <>
          <Title>Deletar tudo</Title>

          <S.Text>
            Você tem certeza que quer deletar os dados? Eles não poderão ser
            recuperados!
          </S.Text>

          <S.ButtonArea>
            <S.ButtonCancel onClick={goToHome}>Cancelar</S.ButtonCancel>
            <S.ButtonDelete onClick={clickHandler}>Deletar</S.ButtonDelete>
          </S.ButtonArea>
        </>
  );
}