import { useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import { Container, ContainerContent } from './style';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  const { data } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      return navigate('/auth');
    }
  }, []);

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
