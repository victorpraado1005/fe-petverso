import { ContainerCardsHome } from './style';

import Header from '../../Components/Header';
import WelcomeSection from '../../Components/WelcomeSection';
// import AnimalHome from '../../Components/AnimalHome';
import Footer from '../../Components/Footer';
import Dicas from '../../Components/Dicas';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';
import MeusPedidosHome from '../../Components/MeusPedidosHome';
import AgendamentosHome from '../../Components/AgendamentosHome';

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <Dicas />
      <ContainerCardsHome>
        <MeusPedidosHome />
        <MeusAnimaisHome />
        <AgendamentosHome />
      </ContainerCardsHome>
      <Footer />
    </>
  );
}
