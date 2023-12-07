import { Container } from './style';

import Header from '../../Components/Header';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';

import WelcomeSection from '../../Components/WelcomeSection';
import MeusPedidosHome from '../../Components/MeusPedidosHome';

export default function Teste() {
  return (
    <Container>
      <Header />
      <WelcomeSection />
      <MeusAnimaisHome />
      <MeusPedidosHome />
    </Container>
  );
}
