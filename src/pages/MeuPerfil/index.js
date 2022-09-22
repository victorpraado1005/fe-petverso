import { useEffect, useState } from 'react';

import {
  Container, UserData, CardAtividades, CardBeneficiosAssinatura, ContainerCard, TitleUserData,
  SubTitleUserData, AnimalsName,
  ButtonArea, CardInfoBeneficiosAssinatura,
  ContainerCardInfoBeneficios, ContainerNotSubscriber,
} from './style';

import UserService from '../../services/UserService';
import AnimalsService from '../../services/AnimalsService';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import Button from '../../button';

import freteGratis from '../../assets/images/entrega-gratis.png';
import cupons from '../../assets/images/cupons.png';
import kitMensal from '../../assets/images/ball.png';

export default function Assinatura() {
  const UserId = localStorage.getItem('UserID');
  const [userInfo, setUserInfo] = useState('');
  const [animalsList, setAnimalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscriber, setIsSubscriber] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const userData = await UserService.getUserById(UserId);

        setUserInfo(userData);
        if (userData.assinante) {
          setIsSubscriber(true);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const AnimalsList = await AnimalsService.listAnimals(UserId);

        setAnimalList(AnimalsList);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <UserData>
          <TitleUserData>
            <h1>{userInfo.name}</h1>
          </TitleUserData>
          <SubTitleUserData>
            <h3>Informações:</h3>
            <div>
              <strong> E-mail: </strong>
              <span>{userInfo.email}</span>
            </div>
            <div>
              <strong> Telefone: </strong>
              <span>{userInfo.phone}</span>
            </div>
            <div>
              <strong> Gênero: </strong>
              <span>{userInfo.gender}</span>
            </div>
            <div>
              <strong> Endereço: </strong>
              <span>{userInfo.address}</span>
            </div>
            <div>
              <strong> Cidade: </strong>
              <span>{userInfo.city}</span>
            </div>
          </SubTitleUserData>
          <ButtonArea>
            <Button>Editar</Button>
          </ButtonArea>
          <SubTitleUserData>
            <h3>Assinatura:</h3>
            <div>
              <strong> Plano: </strong>
              <span>{userInfo.assinante}</span>
            </div>
            <div>
              <strong> Data da assinatura: </strong>
              <span>20/09/2022</span>
            </div>
            <div>
              <strong> Próxima cobrança: </strong>
              <span>20/10/2022</span>
            </div>
          </SubTitleUserData>
          <AnimalsName>
            <h3>Animais:</h3>
            {animalsList.map((animal) => (
              <span>
                {' '}
                -
                {' '}
                {animal.name}
              </span>
            ))}
          </AnimalsName>
        </UserData>
        <ContainerCard>
          <CardAtividades>
            <h1>Atividades: </h1>
            <h1>Atividades: </h1>
            <h1>Atividades: </h1>
            <h1>Atividades: </h1>
          </CardAtividades>
          <CardBeneficiosAssinatura>
            <h3>Benefícios da sua assinatura: </h3>
            {isSubscriber ? (
              <ContainerCardInfoBeneficios>
                <CardInfoBeneficiosAssinatura>
                  <h3>Frete Grátis</h3>
                  <img src={freteGratis} alt="frete gratis" />
                  <span>*Em todos os pedidos no app</span>
                </CardInfoBeneficiosAssinatura>
                <CardInfoBeneficiosAssinatura>
                  <h3>Cupons</h3>
                  <img src={cupons} alt="frete gratis" />
                  <span>Cupons detalhados na Home e na tela de pedidos</span>
                </CardInfoBeneficiosAssinatura>
                <CardInfoBeneficiosAssinatura>
                  <h3>Kit Mensal</h3>
                  <img src={kitMensal} alt="frete gratis" />
                  <span>Todo mês um Kit personalizado será enviado até a sua casa!</span>
                </CardInfoBeneficiosAssinatura>
              </ContainerCardInfoBeneficios>
            ) : (
              <ContainerNotSubscriber>
                <h1>
                  Para aproveitar os benefícios de um assinante basta adquirir um
                  de nossos planos! :)
                </h1>
                <Button>Ver Planos</Button>
              </ContainerNotSubscriber>
            )}

          </CardBeneficiosAssinatura>
        </ContainerCard>
      </Container>
      <Footer />
    </>
  );
}
