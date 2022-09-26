import {
  Container, ContainerPetShops, CardLojas, AreaCupons,
} from './style';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { lojas } from '../../utils/mock/lojas';

import Button from '../../button';

import history from '../../history';

export default function Lojas() {
  return (
    <Container>
      <Header />
      <h1>PetShops</h1>
      <ContainerPetShops>
        {lojas.map((loja) => (
          <CardLojas key={Math.random()}>
            <img src={loja.foto} alt="" width="150" height="150" />
            <h1>{loja.nome}</h1>
            <Button onClick={() => history.push(`/pedidos/${loja.nome}`)}>Ver Produtos</Button>
            <AreaCupons>
              <span>Para assinantes: </span>
              <h3>
                {loja.cupons.length}
                {' '}
                cupons disponíveis
              </h3>
            </AreaCupons>
          </CardLojas>
        ))}
      </ContainerPetShops>
      <Footer />
    </Container>
  );
}
