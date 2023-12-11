import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import PedidoService from '../../services/PedidoService';

import Loader from '../Loader';

import {
  Container, HeaderCardPedidos, CardsContainerPedidos, CardPedidos,
  ContainerSemPedidos,
} from './style';

import Button from '../../button';
import formatDataToBrazilFormat from '../../utils/formatDataToBrazilFormat';

export default function MeusPedidosHome() {
  const { data } = useContext(Context);
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
        <Button onClick={() => navigate(`/todospedidos/${data.user.id}`)}>Ver todos</Button>
      </HeaderCardPedidos>
      {pedidos.length > 0 ? (
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
        </CardsContainerPedidos>
      ) : (
        <ContainerSemPedidos>
          <h1>Nenhum pedido encontrado :(</h1>
        </ContainerSemPedidos>
      )}
    </Container>
  );
}
