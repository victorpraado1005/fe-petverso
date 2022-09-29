import { useState, useContext } from 'react';

import { Container, Content, ButtonArea } from './style';
import useErrors from '../../hooks/useErros';

import { Context } from '../../Context/AuthContext';

import FormGroup from '../../Components/FormGroup';

import Input from '../../input';
import Button from '../../button';
import Logo from '../../assets/images/logo_petverso.svg';
import Loader from '../../Components/Loader';

import ToastContainer from '../../Components/Toast/ToastContainer';
import toast from '../../utils/toast';

export default function Login() {
  const { login } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    setError, getErrorMessageByFieldName,
  } = useErrors();

  function handleNameChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    try {
      setIsLoading(true);
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
    } catch {
      toast({
        type: 'danger',
        text: 'Login ou Senha inválidos!',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <ToastContainer />
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
            <Button type="submit" className="button-login" onClick={handleLogin}>Acessar</Button>
          </ButtonArea>
        </Content>
      </Container>
    </>
  );
}
