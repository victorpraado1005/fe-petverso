import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import PedidoService from '../../services/PedidoService';

import { CardHome } from '../../pages/Home/style';

import Loader from '../Loader';

import history from '../../history';

import {
  TitleContainer, CardPedidos, CardsContainer,
} from './style';

import Button from '../../button';
import formatDataToBrazilFormat from '../../utils/formatDataToBrazilFormat';

export default function MeusPedidosHome() {
  const { data } = useContext(Context);
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const listPedidos = await PedidoService.getPedidosByUserId(data.user.id);
        listPedidos.length = 4;
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
        <Button onClick={() => history.push('/meuperfil')}>Ver todos</Button>
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
              <span>{formatDataToBrazilFormat(pedido.data_pedido)}</span>
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
    </CardHome>
  );
}
