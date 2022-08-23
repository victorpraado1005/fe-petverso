import { useContext, useRef } from 'react';

import { Container, Content } from './style';

import { Context } from '../../Context/AuthContext';

export default function Login() {
  const { handleLogin } = useContext(Context);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const signIn = () => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    handleLogin(email, password);
  };

  return (
    <Container>
      <Content>
        <h1>Login - PetVerso</h1>
        <input type="email" placeholder="E-mail" ref={emailInput} />
        <input type="password" placeholder="Senha" ref={passwordInput} />
        <button type="submit" onClick={signIn}>Acessar</button>
      </Content>
    </Container>
  );
}
