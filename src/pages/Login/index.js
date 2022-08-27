import { useState, useContext } from 'react';

import { Container, Content, ButtonArea } from './style';
import useErrors from '../../hooks/useErros';

import { Context } from '../../Context/AuthContext';

import FormGroup from '../../Components/FormGroup';

import Input from '../../input';
import Button from '../../button';
import Logo from '../../assets/images/logo_petverso.svg';

export default function Login() {
  const { login } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({ field: 'email', message: 'Preencher campo de e-mail' });
    } else {
      removeError('senha');
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'senha', message: 'Preencher campo de senha' });
    } else {
      removeError('name');
    }
  }

  async function handleLogin() {
    if (errors.length > 0) {
      return;
    }

    if (!email && !password) {
      setError({ field: 'email', message: 'Preencher campo de e-mail' });
      setError({ field: 'senha', message: 'Preencher campo de senha' });
      return;
    }

    if (!email) {
      return setError({ field: 'email', message: 'Preencher campo de e-mail' });
    }

    if (!password) {
      return setError({ field: 'senha', message: 'Preencher campo de senha' });
    }

    await login(email, password);

    const user = localStorage.getItem('UserID');
    if (!user) {
      document.getElementById('senha').style.display = 'block';
    }
  }

  return (
    <Container>
      <img src={Logo} alt="" />
      <Content>
        <h1>Login</h1>
        <p
          id="senha"
          style={{
            display: 'none',
            color: 'red',
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          E-mail ou senha incorretos
        </p>
        <FormGroup error={getErrorMessageByFieldName('email')}>
          <span>E-mail:</span>
          <Input
            error={getErrorMessageByFieldName('email')}
            value={email}
            type="email"
            placeholder="E-mail"
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('senha')}>
          <span>Senha:</span>
          <Input
            error={getErrorMessageByFieldName('senha')}
            value={password}
            type="password"
            placeholder="Senha"
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <ButtonArea>
          <Button type="submit">Criar Conta</Button>
          <Button type="submit" onClick={handleLogin}>Acessar</Button>
        </ButtonArea>
      </Content>
    </Container>
  );
}
