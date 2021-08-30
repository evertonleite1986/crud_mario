import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router-dom';

export default function UpdateOne(props) {
  const state = props.location.state;

  const [name, setName] = useState(state.name);
  const [url, setUrl] = useState(state.url);
  const [tipo, setTipo] = useState(state.tipo);
  
  const history = useHistory();

  const item = {
    name: name,
    url: url,
    tipo: tipo,
  };

  const submitHandler = async event => {
    event.preventDefault();

    const request = await Api.buildApiPutRequest(
      Api.updateUrl(state._id),
      item
    ).catch(e => {
      console.error('Erro ao tentar modificar o item no banco: ', e);
    })
    const result = await request.json();
    const id = result._id;
    history.push(`/view/${id}`, item);
  }

  return (
      <>
      <Title>Atualizar</Title>

      <S.Form>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input
          value={name}
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        ></S.Input>

        <S.Label htmlFor="url">URL da Imagem</S.Label>
        <S.Input
          value={url}
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

        <S.Button onSubmit={submitHandler}>Alterar</S.Button>
      </S.Form>
      </>
  );
}