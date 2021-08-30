import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [tipo, setTipo] = useState('');

  const history = useHistory();

  const item = {
    name: name,
    url: url,
    tipo: tipo,
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const request = await Api.buildApiPostRequest(Api.createUrl(), item).catch(
      (e) => {
        console.error('Erro ao tentar adicionar o item ao banco: ', e);
      }
    );

    const result = await request.json();

    const id = result._id;

    history.push(`/view/${id}`, result);
  };

  return (
    <>
      <Title>Criar um novo personagem</Title>

      <S.Form onSubmit={submitHandler}>
        <S.Label htmlFor="name">Nome do personagem</S.Label>
        <S.Input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="url">URL da Imagem</S.Label>
        <S.Input
          id="url"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="tipo">Tipo</S.Label>
        <S.Select id="tipo" onChange={(e) => setTipo(e.target.value)} required>
          <option value="" hidden>
            -
          </option>
          <option value="Principal">Principal</option>
          <option value="Secundário">Secundário</option>
          <option value="Bebês">Bebês</option>
          <option value="Inimigos">Inimigos</option>
          <option value="Aliados">Aliados</option>
        </S.Select>

        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </>
  );
}