import { Outlet } from 'react-router-dom';
import { Container, ContainerContent } from './style';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Footer />
        <Outlet />
      </ContainerContent>
    </Container>
  );
}
