import { Container } from './style';

import Header from '../../Components/Header';
import MeusAnimaisHome from '../../Components/MeusAnimaisHome';

import WelcomeSection from '../../Components/WelcomeSection';

export default function Teste() {
  return (
    <Container>
      <Header />
      <WelcomeSection />
      <MeusAnimaisHome />
    </Container>
  );
}
