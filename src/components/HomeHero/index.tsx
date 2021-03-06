/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import imgPicture from '../../assets/perfil.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={imgPicture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Caio</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Caio</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Andrade</span>
            </div>            
            <div>
              Cidade: <span className="blue">São Paulo-SP</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Back-end .NET Jr.,</span>
            </div>
            <div>
              Empresa: <span className="blue">Level Up!</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
