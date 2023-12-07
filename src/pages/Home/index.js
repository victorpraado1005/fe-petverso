import { Container, ContainerCardsHome } from './style';

import Header from '../../Components/Header';
import WelcomeSection from '../../Components/WelcomeSection';
// import AnimalHome from '../../Components/AnimalHome';
import Footer from '../../Components/Footer';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';
import MeusPedidosHome from '../../Components/MeusPedidosHome';
import AgendamentosHome from '../../Components/AgendamentosHome';

export default function Home() {
  return (
    <Container>
      <Header />
      <WelcomeSection />
      <ContainerCardsHome>
        <MeusAnimaisHome />
        <MeusPedidosHome />
        <AgendamentosHome />
      </ContainerCardsHome>
      <Footer />
    </Container>
  );
}
