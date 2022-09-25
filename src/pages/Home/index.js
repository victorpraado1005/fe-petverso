import { useContext } from 'react';

import { ContainerCardsHome } from './style';

import { Context } from '../../Context/AuthContext';

import Header from '../../Components/Header';
import WelcomeSection from '../../Components/WelcomeSection';
// import AnimalHome from '../../Components/AnimalHome';
import Footer from '../../Components/Footer';
import Dicas from '../../Components/Dicas';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';
import MeusPedidosHome from '../../Components/MeusPedidosHome';
import AgendamentosHome from '../../Components/AgendamentosHome';

export default function Home() {
  const { authenticated } = useContext(Context);

  if (authenticated === true) {
    const UserId = localStorage.getItem('UserID');
    console.debug(UserId);
  }

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
