import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

import {
  Container, Card, GridArea,
} from './style';

import PedidoService from '../../services/PedidoService';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import arrowLeft from '../../assets/images/left-arrow_dark.png';
import Loader from '../../Components/Loader';

export default function TodosPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const PedidosList = await PedidoService.getPedidosByUserId(id);
        setPedidos(PedidosList);
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
        <div className="title-pedidos">
          <Link to="/meuperfil">
            <img src={arrowLeft} alt="Seta para esquerda" title="Voltar" />
          </Link>
          <h1>Seus Pedidos</h1>
          <h1>&ensp;</h1>
        </div>
        <GridArea>
          {pedidos.map((pedido) => (
            <Card key={pedido.id}>
              <div className="section-info">
                <div className="pedido-info">
                  <span>
                    <strong>
                      Data do Pedido:
                    </strong>
                    {' '}
                    {pedido.data_pedido}
                  </span>
                  <span>
                    <strong>
                      Loja:
                    </strong>
                    {' '}
                    {pedido.loja}
                  </span>
                  <span>
                    <strong>Valor Total:</strong>
                    {' '}
                    {pedido.valor_total}
                  </span>
                  <span>
                    <strong>Status:</strong>
                    {' '}
                    {pedido.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </GridArea>
      </Container>
      <Footer />
    </>
  );
}
