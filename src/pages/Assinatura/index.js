import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import {
  Container, ContainerFormCriarConta, ContainerUsario,
  CardEndereco, Line, Body, CardPlanos,
  ContainerPlanos, CardResumo, ContainerAssinatura,
  ContainerEndereco,
} from './style';

import UserService from '../../services/UserService';
import useErrors from '../../hooks/useErros';
import Button from '../../button';
import Loader from '../../Components/Loader';
import FormGroup from '../../Components/FormGroup';

import history from '../../history';
import ToastContainer from '../../Components/Toast/ToastContainer';
import toast from '../../utils/toast';

export default function Assinatura() {
  const { data } = useContext(Context);
  const [userInfo, setUserInfo] = useState('');
  const [plano, setPlano] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [estado, setEstado] = useState('');
  const [valorPlano, setValorPlano] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const {
    setError, removeAllErrors, getErrorMessageByFieldName,
  } = useErrors();

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      if (!data.user.id) {
        return setIsLoading(false);
      }

      try {
        const userData = await UserService.getUserById(data.user.id);

        setUserInfo(userData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handlePlanoNaoAssinante() {
    setPlano('Não Assinante');
    setValorPlano(0);
  }

  function handlePlanoMensal() {
    setPlano('Plano Mensal');
    setValorPlano(24.90);
  }

  function handlePlanoTrimestral() {
    setPlano('Plano Trimestral');
    setValorPlano(19.90);
  }

  function handlePlanoAnual() {
    setPlano('Plano Anual');
    setValorPlano(14.90);
  }

  async function handleAssinarUsuarioComConta() {
    let auxPlano = '';

    if (plano === 'Plano Mensal') {
      auxPlano = 'Plano Mensal';
    }

    if (plano === 'Plano Trimestral') {
      auxPlano = 'Plano Trimestral';
    }

    if (plano === 'Plano Anual') {
      auxPlano = 'Plano Anual';
    }

    try {
      setIsLoading(true);
      const User = {
        assinante: auxPlano,
      };

      await UserService.updateSubscription(data.user.id, User);
      history.push('/home');
    } catch {
      toast({
        type: 'danger',
        text: 'Não foi possível finalizar a assinatura',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCriarConta() {
    removeAllErrors();

    if (!name) {
      return setError({ field: 'name', message: 'Preencher campo de nome' });
    }
    if (!email) {
      return setError({ field: 'email', message: 'Preencher campo de E-mail' });
    }
    if (!password) {
      return setError({ field: 'password', message: 'Preencher campo de senha' });
    }
    if (password !== confirmarSenha) {
      return setError({ field: 'confirmPassword', message: 'As senhas não coincidem' });
    }
    if (!phone) {
      return setError({ field: 'phone', message: 'Preencher campo de Telefone' });
    }
    let auxPlano = '';

    if (plano === 'Plano Mensal') {
      auxPlano = 'Plano Mensal';
    }

    if (plano === 'Plano Trimestral') {
      auxPlano = 'Plano Trimestral';
    }

    if (plano === 'Plano Anual') {
      auxPlano = 'Plano Anual';
    }

    try {
      setIsLoading(true);
      const User = {
        name,
        email,
        phone,
        address,
        city,
        estado,
        cep,
        assinante: auxPlano,
        password,
      };
      console.log(User);
      await UserService.createUser(User);
      history.push('/home');
    } catch {
      toast({
        type: 'danger',
        text: 'Não foi possível finalizar a assinatura',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Body>
      <Loader isLoading={isLoading} />
      <ToastContainer />
      <Container>
        <h1 className="title-text">Conta</h1>
        {data.user.id ? (
          <ContainerUsario>
            <h1>
              Olá,
              {' '}
              {userInfo.name}
            </h1>
            <p>Que bom que você decidiu entrar para o clube PetVerso!</p>
            <p>
              Confirme seu endereço e selecione o plano que melhor se encaixa e daremos
              prosseguimento a sua assinatura!
            </p>
            <h3>Endereço de Entrega:</h3>
            <ContainerEndereco>
              <CardEndereco>
                <span>Rua</span>
                <h5>{userInfo.address}</h5>
              </CardEndereco>
              <CardEndereco>
                <span>CEP</span>
                <h5>{userInfo.cep}</h5>
              </CardEndereco>
              <CardEndereco>
                <span>Cidade</span>
                <h5>{userInfo.city}</h5>
              </CardEndereco>
            </ContainerEndereco>
          </ContainerUsario>
        ) : (
          <ContainerFormCriarConta>
            <h1 className="title-crie-conta">
              CRIE SUA CONTA ANTES DE CONTINUAR
            </h1>
            <div className="input-container">
              <div className="input-area-info-user">
                <FormGroup error={getErrorMessageByFieldName('name')}>
                  <input
                    type="text"
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}
                  />
                </FormGroup>
                <FormGroup error={getErrorMessageByFieldName('email')}>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </FormGroup>
                <FormGroup error={getErrorMessageByFieldName('password')}>
                  <input
                    type="password"
                    placeholder="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </FormGroup>
                <FormGroup error={getErrorMessageByFieldName('confirmPassword')}>
                  <input
                    type="password"
                    placeholder="Confirmar Senha"
                    onChange={(event) => setConfirmarSenha(event.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="input-telefone">
                <FormGroup error={getErrorMessageByFieldName('phone')}>
                  <input
                    type="text"
                    placeholder="Telefone"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="input-area-address">
                <div className="input-rua">
                  <input
                    type="text"
                    placeholder="Rua"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <div className="input-cep">
                  <input
                    type="text"
                    placeholder="CEP"
                    onChange={(event) => setCep(event.target.value)}
                  />
                </div>
                <div className="input-numero-complemento">
                  <div className="input-cidade">
                    <input
                      type="text"
                      placeholder="Cidade"
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </div>
                  <div className="input-estado">
                    <input
                      type="text"
                      placeholder="Estado"
                      onChange={(event) => setEstado(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ContainerFormCriarConta>
        )}
        <Line />
        <h1 className="title-text">Assinatura</h1>
        <ContainerAssinatura>
          <ContainerPlanos>
            <CardPlanos>
              <div className="title-card">
                <h4>Não assinante</h4>
                <input
                  type="radio"
                  name="plano"
                  onClick={handlePlanoNaoAssinante}
                />
              </div>
              <div className="info-card-nao-assinante">
                <p>Você não terá os seguintes benefícios:</p>
                <ul>
                  <li>Frete Grátis</li>
                  <li>Cupons em lojas parceiras</li>
                  <li>Box personalizada mensalmente</li>
                </ul>
              </div>
              <div className="footer-card">
                <span>&ensp;</span>
              </div>
            </CardPlanos>
            <CardPlanos>
              <div className="title-card">
                <h4>Mensal</h4>
                <input
                  type="radio"
                  name="plano"
                  onClick={handlePlanoMensal}
                />
              </div>
              <div className="info-card">
                <span>
                  <strong>R$24,90</strong>
                  /mês
                </span>
              </div>
              <div className="footer-card">
                <span>&ensp;</span>
              </div>
            </CardPlanos>
            <CardPlanos>
              <div className="title-card">
                <h4>Trimestral</h4>
                <input
                  type="radio"
                  name="plano"
                  onClick={handlePlanoTrimestral}
                />
              </div>
              <div className="info-card">
                <span>
                  <strong>R$19,90</strong>
                  /mês
                </span>
              </div>
              <div className="footer-card">
                <span>- R$60 por ano</span>
              </div>
            </CardPlanos>
            <CardPlanos>
              <div className="title-card">
                <h4>Anual</h4>
                <input
                  type="radio"
                  name="plano"
                  onClick={handlePlanoAnual}
                />
              </div>
              <div className="info-card">
                <span>
                  <strong>R$14,90</strong>
                  /mês
                </span>
              </div>
              <div className="footer-card">
                <span>- R$120 por ano</span>
              </div>
            </CardPlanos>
          </ContainerPlanos>
          <CardResumo>
            <h4>Resumo</h4>
            <div className="plano-selecionado">
              <span>
                Plano Selecionado:
                {' '}
                {plano}
              </span>
              <span>
                Total: R$
                {valorPlano}
              </span>
            </div>
            <div className="info-pagamento">
              <span>
                *Clique em “Confirmar” para receber as instruções de pagamento
                por e-mail*
              </span>
            </div>
            <div className="btn-confirmar">
              {data.user.id ? (
                <Button onClick={handleAssinarUsuarioComConta}>Confirmar</Button>
              ) : (
                <Button onClick={handleCriarConta}>Confirmar</Button>
              )}
            </div>
          </CardResumo>
        </ContainerAssinatura>
        <div className="info-garantia">
          <span>*Oferecemos garantia de 07 dias para reembolso total do seu dinheiro*</span>
        </div>
      </Container>
    </Body>
  );
}
