import { useEffect, useState } from 'react';

import PedidoService from '../../services/PedidoService';

import { CardHome } from '../../pages/Home/style';

import Loader from '../Loader';

import history from '../../history';

import {
  TitleContainer, CardPedidos, CardsContainer,
  ButtonArea,
} from './style';

import Button from '../../button';

export default function MeusPedidosHome() {
  const UserId = localStorage.getItem('UserID');
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const listPedidos = await PedidoService.getPedidosByUserId(UserId);
        listPedidos.length = 2;
        setPedidos(listPedidos);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <CardHome>
      <Loader isLoading={isLoading} />
      <TitleContainer>
        <h1>Meus Pedidos:</h1>
      </TitleContainer>
      <CardsContainer>
        {pedidos.map((pedido) => (
          <CardPedidos>
            <div>
              <span className="title-data-pedido"> Loja: </span>
              <span>{pedido.loja}</span>
            </div>
            <div>
              <span className="title-data-pedido"> Data: </span>
              <span>{pedido.data_pedido}</span>
            </div>
            <div>
              <span className="title-data-pedido"> Valor: </span>
              <span>{pedido.valor_total}</span>
            </div>
            <div>
              <span className="title-data-pedido"> Status: </span>
              <span>{pedido.status}</span>
            </div>
          </CardPedidos>
        ))}
      </CardsContainer>
      <ButtonArea>
        <Button onClick={() => history.push('/meuperfil')}>Ver todos</Button>
      </ButtonArea>
    </CardHome>
  );
}
