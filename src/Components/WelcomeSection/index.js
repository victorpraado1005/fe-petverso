import { useContext } from 'react';
import { Context } from '../../Context/AuthContext';

import { Container, ContainerText } from './style';

import pataIntro from '../../assets/images/pataIntro.svg';
import pataIntroEsqueda from '../../assets/images/pataIntroEsquerda.svg';

export default function WelcomeSection() {
  const { data } = useContext(Context);

  return (
    <Container>
      <img src={pataIntroEsqueda} alt="" className="pataIntroEsquerda" />
      <ContainerText>
        <h1>
          Bem-Vindo,
          {' '}
          <strong>{data.user.name}</strong>
        </h1>
        <span>
          O melhor lugar para você cuidar da saúde do seu animal!
        </span>
      </ContainerText>
      <img src={pataIntro} alt="" />
    </Container>
  );
}
