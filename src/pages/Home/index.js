import {
  Container, ContainerCardsHome, ContainerInfoContent,
} from './style';

import MeusAnimaisHome from '../../Components/MeusAnimaisHome';
import WelcomeSection from '../../Components/WelcomeSection';
import MeusPedidosHome from '../../Components/MeusPedidosHome';
import AgendamentosHome from '../../Components/AgendamentosHome';

export default function Home() {
  return (
    <Container>
      <ContainerInfoContent>
        <WelcomeSection />
        <ContainerCardsHome>
          <MeusAnimaisHome />
          <MeusPedidosHome />
          <AgendamentosHome />
        </ContainerCardsHome>
      </ContainerInfoContent>
    </Container>
  );
}
