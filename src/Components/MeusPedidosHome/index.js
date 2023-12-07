import { useState, useEffect, useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import PedidoService from '../../services/PedidoService';

import Loader from '../Loader';

import history from '../../history';

import {
  Container, HeaderCardPedidos, CardsContainerPedidos, CardPedidos,
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
    <Container>
      <Loader isLoading={isLoading} />
      <HeaderCardPedidos>
        <h1>Meus Pedidos:</h1>
        <Button onClick={() => history.push('/meuperfil')}>Ver todos</Button>
      </HeaderCardPedidos>
      <CardsContainerPedidos>
        {pedidos.map((pedido) => (
          <CardPedidos key={pedido.id}>
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
        <CardPedidos key={12}>
          <div>
            <span className="title-data-pedido"> Loja: </span>
            <span>Cobasi</span>
          </div>
          <div>
            <span className="title-data-pedido"> Data: </span>
            <span>29/11/2023</span>
          </div>
          <div>
            <span className="title-data-pedido"> Valor: </span>
            <span>R$190,02</span>
          </div>
          <div>
            <span className="title-data-pedido"> Status: </span>
            <span>Enviado</span>
          </div>
        </CardPedidos>
        <CardPedidos key={13}>
          <div>
            <span className="title-data-pedido"> Loja: </span>
            <span>Cobasi</span>
          </div>
          <div>
            <span className="title-data-pedido"> Data: </span>
            <span>29/11/2023</span>
          </div>
          <div>
            <span className="title-data-pedido"> Valor: </span>
            <span>R$190,02</span>
          </div>
          <div>
            <span className="title-data-pedido"> Status: </span>
            <span>Enviado</span>
          </div>
        </CardPedidos>
        <CardPedidos key={13}>
          <div>
            <span className="title-data-pedido"> Loja: </span>
            <span>Cobasi</span>
          </div>
          <div>
            <span className="title-data-pedido"> Data: </span>
            <span>29/11/2023</span>
          </div>
          <div>
            <span className="title-data-pedido"> Valor: </span>
            <span>R$190,02</span>
          </div>
          <div>
            <span className="title-data-pedido"> Status: </span>
            <span>Enviado</span>
          </div>
        </CardPedidos>
        <CardPedidos key={13}>
          <div>
            <span className="title-data-pedido"> Loja: </span>
            <span>Cobasi</span>
          </div>
          <div>
            <span className="title-data-pedido"> Data: </span>
            <span>29/11/2023</span>
          </div>
          <div>
            <span className="title-data-pedido"> Valor: </span>
            <span>R$190,02</span>
          </div>
          <div>
            <span className="title-data-pedido"> Status: </span>
            <span>Enviado</span>
          </div>
        </CardPedidos>
      </CardsContainerPedidos>
    </Container>
  );
}
