import { useContext } from 'react';
import { Context } from '../../Context/AuthContext';

import { Container } from './style';

export default function WelcomeSection() {
  const { userInfo } = useContext(Context);

  return (
    <Container>
      <span>
        Bem-Vindo,
        {' '}
        <strong>{userInfo.name}</strong>
      </span>
      <h3>
        O melhor lugar para você cuidar da saúde do seu animal!
      </h3>
    </Container>
  );
}
