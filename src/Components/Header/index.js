import { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import { Container, ButtonArea } from './style';

import Button from '../../button';

import logoDark from '../../assets/images/logo_dark.svg';

export default function Header() {
  const { handleLogout } = useContext(Context);

  return (
    <Container>
      <img src={logoDark} alt="" />
      <ButtonArea>
        <Button type="button" onClick={handleLogout}>Contato</Button>
        <Button type="button" className="delete-button" onClick={handleLogout}>Sair</Button>
      </ButtonArea>
    </Container>
  );
}
