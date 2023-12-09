import {
  Container, ContainerContent, ContainerCardsHome, ContainerInfoContent,
} from './style';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';
import WelcomeSection from '../../Components/WelcomeSection';
import MeusPedidosHome from '../../Components/MeusPedidosHome';
import AgendamentosHome from '../../Components/AgendamentosHome';

export default function Teste() {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Footer />
        <ContainerInfoContent>
          <WelcomeSection />
          <ContainerCardsHome>
            <MeusAnimaisHome />
            <MeusPedidosHome />
            <AgendamentosHome />
          </ContainerCardsHome>
        </ContainerInfoContent>
      </ContainerContent>
    </Container>
  );
}
