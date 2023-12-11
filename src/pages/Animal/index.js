import { Container } from './style';

import { ContainerContent, ContainerInfoContent } from '../Home/style';

import Header from '../../Components/Header';
import AnimalList from '../../Components/AnimalsList';
import Footer from '../../Components/Footer';

export default function Animal() {
  return (
    <>
      <Container>
        <Header />
        <ContainerContent>
          <Footer />
          <ContainerInfoContent>
            <AnimalList />
          </ContainerInfoContent>
        </ContainerContent>
      </Container>
    </>
  );
}
