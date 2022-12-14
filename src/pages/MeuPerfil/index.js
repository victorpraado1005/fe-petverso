import { useEffect, useState } from 'react';

import history from '../../history';

import {
  Container, UserData, CardAtividades, CardBeneficiosAssinatura, ContainerCard, TitleUserData,
  SubTitleUserData, AnimalsName,
  ButtonArea, CardInfoBeneficiosAssinatura,
  ContainerCardInfoBeneficios, ContainerNotSubscriber,
  ContainerCardPedidos, CardPedidos,
} from './style';

import UserService from '../../services/UserService';
import AnimalsService from '../../services/AnimalsService';
import PedidoService from '../../services/PedidoService';

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
  const [pedidos, setPedidos] = useState([]);
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
        const listPedidos = await PedidoService.getPedidosByUserId(UserId);
        listPedidos.length = 4;
        setPedidos(listPedidos);
        console.log(pedidos);
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

  function handleEditUser(id) {
    history.push(`/editUser/${id}`);
  }

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
            <h3>Informa????es:</h3>
            <div>
              <strong> E-mail: </strong>
              <span>{userInfo.email}</span>
            </div>
            <div>
              <strong> Telefone: </strong>
              <span>{userInfo.phone}</span>
            </div>
            <div>
              <strong> G??nero: </strong>
              <span>{userInfo.gender}</span>
            </div>
            <div>
              <strong> Endere??o: </strong>
              <span>{userInfo.address}</span>
            </div>
            <div>
              <strong> Cidade: </strong>
              <span>{userInfo.city}</span>
            </div>
          </SubTitleUserData>
          <ButtonArea>
            <Button onClick={() => handleEditUser(userInfo.id)}>Editar</Button>
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
              <strong> Pr??xima cobran??a: </strong>
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
            <div className="title-card-pedidos">
              <h1>Meus Pedidos: </h1>
              <Button onClick={() => history.push(`/todospedidos/${UserId}`)}>Ver Todos</Button>
            </div>
            <ContainerCardPedidos>
              {pedidos.map((pedido) => (
                <CardPedidos>
                  <div>
                    <span className="title-data-pedido">Loja:</span>
                    <span>{pedido.loja}</span>
                  </div>
                  <div>
                    <span className="title-data-pedido">Data do Pedido:</span>
                    <span>{pedido.data_pedido}</span>
                  </div>
                  <div>
                    <span className="title-data-pedido">Valor Total:</span>
                    <span>{pedido.valor_total}</span>
                  </div>
                  <div>
                    <span className="title-data-pedido">Status do Pedido:</span>
                    <span>{pedido.status}</span>
                  </div>
                </CardPedidos>
              ))}
            </ContainerCardPedidos>
          </CardAtividades>
          <CardBeneficiosAssinatura>
            <h3>Benef??cios da sua assinatura: </h3>
            {isSubscriber ? (
              <ContainerCardInfoBeneficios>
                <CardInfoBeneficiosAssinatura>
                  <h3>Frete Gr??tis</h3>
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
                  <span>Todo m??s um Kit personalizado ser?? enviado at?? a sua casa!</span>
                </CardInfoBeneficiosAssinatura>
              </ContainerCardInfoBeneficios>
            ) : (
              <ContainerNotSubscriber>
                <h1>
                  Para aproveitar os benef??cios de um assinante basta adquirir um
                  de nossos planos! :)
                </h1>
                <Button onClick={() => history.push('/assinatura')}>Ver Planos</Button>
              </ContainerNotSubscriber>
            )}

          </CardBeneficiosAssinatura>
        </ContainerCard>
      </Container>
      <Footer />
    </>
  );
}
