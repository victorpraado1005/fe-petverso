import { Container, ContainerCardDicas, CardDicas } from './style';

import Button from '../../button';

export default function Dicas() {
  return (
    <Container>
      <h1>Dicas:</h1>
      <ContainerCardDicas>
        <CardDicas>
          <span className="title-dicas">Dica #01:</span>
          <span className="text-dicas">Alimente o seu cachorro se não ele vai morrer!!!!!!Alimente o seu cachorro se não ele vai morrer!!!!!!</span>
          <Button>Acessar</Button>
        </CardDicas>
        <CardDicas>
          <span className="title-dicas">Dica #02:</span>
          <span className="text-dicas">Alimente o seu cachorro se não ele vai morrer!!!!!!Alimente o seu cachorro se não ele vai morrer!!!!!!</span>
          <Button>Acessar</Button>
        </CardDicas>
        <CardDicas>
          <span className="title-dicas">Dica #03:</span>
          <span className="text-dicas">Alimente o seu cachorro se não ele vai morrer!!!!!!Alimente o seu cachorro se não ele vai morrer!!!!!!</span>
          <Button>Acessar</Button>
        </CardDicas>
        <CardDicas>
          <span className="title-dicas">Dica #04:</span>
          <span className="text-dicas">Alimente o seu cachorro se não ele vai morrer!!!!!!Alimente o seu cachorro se não ele vai morrer!!!!!!</span>
          <Button>Acessar</Button>
        </CardDicas>
      </ContainerCardDicas>
    </Container>
  );
}
