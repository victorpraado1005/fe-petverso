import { useContext, useRef } from 'react';

import { Container, Content, ButtonArea } from './style';

import { Context } from '../../Context/AuthContext';

import FormGroup from '../../Components/FormGroup';

import Input from '../../input';
import Button from '../../button';
import Logo from '../../assets/images/logo_petverso.svg';

export default function Login() {
  const { handleLogin } = useContext(Context);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const signIn = () => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    if (!email) {
      return alert('Preencher e-mail');
    }

    if (!password) {
      return alert('Preencher senha');
    }

    handleLogin(email, password);
  };

  return (
    <Container>
      <img src={Logo} alt="" />
      <Content>
        <h1>Login</h1>
        <FormGroup>
          <span>E-mail:</span>
          <Input type="email" placeholder="E-mail" ref={emailInput} />
        </FormGroup>
        <FormGroup>
          <span>Senha:</span>
          <Input type="password" placeholder="Senha" ref={passwordInput} />
        </FormGroup>
        <ButtonArea>
          <Button type="submit">Criar Conta</Button>
          <Button type="submit" onClick={signIn}>Acessar</Button>
        </ButtonArea>
      </Content>
    </Container>
  );
}
