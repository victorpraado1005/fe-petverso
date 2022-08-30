import { Container } from './style';

import Header from '../../Components/Header';
import ContactFormAnimal from '../../Components/ContactFormAnimal';
import Footer from '../../Components/Footer';

export default function AddAnimal() {
  return (
    <Container>
      <Header />
      <ContactFormAnimal
        titleLabel="Criar Animal"
        buttonLabel="Criar Animal"
      />
      <Footer />
    </Container>
  );
}
