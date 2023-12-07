import { Container, ContainerCardsHome } from './style';

import Header from '../../Components/Header';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';

import WelcomeSection from '../../Components/WelcomeSection';
import MeusPedidosHome from '../../Components/MeusPedidosHome';
import AgendamentosHome from '../../Components/AgendamentosHome';

export default function Teste() {
  return (
    <Container>
      <Header />
      <WelcomeSection />
      <ContainerCardsHome>
        <MeusAnimaisHome />
        <MeusPedidosHome />
        <AgendamentosHome />
      </ContainerCardsHome>
    </Container>
  );
}
