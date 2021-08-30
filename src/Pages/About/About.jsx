import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import everton from './everton.jpg';

export default function About() {
  return (
    <div>
    <Title>Sobre</Title>
      <Paragraph>
        Me chamo Everton Vieira Leite, sou estudante de Desenvolvimento Front-End, na BlueEdTech. 
      </Paragraph>
      
      <Paragraph>
        Projeto realizado com ReactJs. usando CRUD. Neste projeto aprendi como utilizar o famoso CRUD(Create, Read, Update, Delete), onde torna-se possivel com a utilização de uma API, inserir dados, ler os dados, modificá-los e deletá-los.
      </Paragraph>

        <S.Img src={everton}></S.Img>
      

      <Paragraph>
        Seguem abaixo os links para contato:
      </Paragraph>

      <S.SocialBlock>
        <a
          href="https://github.com/evertonleite1986"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
        
        <a
          href="https://linkedin.com/in/everton-vieira-leite-94a957160"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
        
        <a
          href="mailto:everton_leite25@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-mail"></i>
        </a>
      </S.SocialBlock>
    </div>
  );
}