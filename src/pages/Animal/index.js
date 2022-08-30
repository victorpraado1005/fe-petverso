import { Container } from './style';

import Header from '../../Components/Header';
import AnimalList from '../../Components/AnimalListAnimals';
import Footer from '../../Components/Footer';

export default function Animal() {
  return (
    <>
      <Header />
      <Container>
        <AnimalList />
      </Container>
      <Footer />
    </>
  );
}
