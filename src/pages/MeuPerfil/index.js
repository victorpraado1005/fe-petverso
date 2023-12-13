import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import {
  Container, ContainerContent, UserData, CardAtividades, CardBeneficiosAssinatura, ContainerCard, TitleUserData,
  SubTitleUserData, AnimalsName,
  ButtonArea, CardInfoBeneficiosAssinatura,
  ContainerCardInfoBeneficios, ContainerNotSubscriber,
  ContainerCardPedidos, CardPedidos,
} from './style';

import UserService from '../../services/UserService';
import AnimalsService from '../../services/AnimalsService';
import PedidoService from '../../services/PedidoService';

import Loader from '../../Components/Loader';
import Button from '../../button';

import freteGratis from '../../assets/images/entrega-gratis.png';
import cupons from '../../assets/images/cupons.png';
import kitMensal from '../../assets/images/ball.png';

import formatDataToBrazilFormat from '../../utils/formatDataToBrazilFormat';

export default function Assinatura() {
  const { data } = useContext(Context);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const [animalsList, setAnimalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscriber, setIsSubscriber] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const userData = await UserService.getUserById(data.user.id);
        setUserInfo(userData);

        if (userData.assinante) {
          setIsSubscriber(true);
        }

        const listPedidos = await PedidoService.getPedidosByUserId(data.user.id);
        listPedidos.length = 4;

        const AnimalsList = await AnimalsService.listAnimals(data.user.id);

        setAnimalList(AnimalsList);
        setPedidos(listPedidos);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleEditUser(id) {
    navigate(`/editUser/${id}`);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Container>
        <ContainerContent>
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
              <div className="title-card-pedidos">
                <h1>Meus Pedidos: </h1>
                <Button onClick={() => navigate(`/todospedidos/${data.user.id}`)}>Ver Todos</Button>
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
                      <span>{formatDataToBrazilFormat(pedido.data_pedido)}</span>
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
                  <Button onClick={() => navigate('/assinatura')}>Ver Planos</Button>
                </ContainerNotSubscriber>
              )}
            </CardBeneficiosAssinatura>
          </ContainerCard>
        </ContainerContent>
      </Container>
    </>
  );
}
