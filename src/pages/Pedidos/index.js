import { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import { produtos } from '../../utils/mock/produtos';

import { lojas } from '../../utils/mock/lojas';

import {
  Container, ContainerListaProdutos, RowProduct,
  ContainerCarrinho, ContainerCheckout, RowProductCarrinho,
  InfoContainer, ContainerTotal, ContainerProductsAndCart,
  ContainerInfoEntrega, ContainerTotalPedido,
  RowInfoAddress, RowInfoFrete,
  RowOptionFrete, ContainerCupons,
  RowCupom, RowCupomNaoAssinante,
  EspacamentoAreaTotalPedido, ContainerValorTotalPedido,
} from './style';

import UserService from '../../services/UserService';
import PedidoService from '../../services/PedidoService';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Button from '../../button';
import Loader from '../../Components/Loader';

import history from '../../history';

export default function Pedidos() {
  const { loja } = useParams();
  const { data } = useContext(Context);
  const [userData, setUserData] = useState('');
  const [lojaSelecionada, setLojaSelecionada] = useState(lojas);
  const [produtosLoja, setProdutoLoja] = useState(produtos);
  const [carrinho, setCarrinho] = useState([]);
  const [frete, setFrete] = useState('');
  const [valorFrete, setValorFrete] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let valorCarrinho = 0;
  const [cupomSelected, setCupomSelected] = useState('');
  const [valorCupom, setValorCupom] = useState(0);

  const cart = [];

  carrinho.map((produto) => (
    valorCarrinho += produto.valor
  ));

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const UserInfo = await UserService.getUserById(data.user.id);
        setUserData(UserInfo);
        setProdutoLoja((prevState) => prevState.filter(
          (produto) => produto.loja === loja,
        ));
        setLojaSelecionada((prevState) => prevState.filter(
          (lojaAtual) => lojaAtual.nome === loja,
        ));
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleAddToCart(produto) {
    let actionId = Math.random();
    let produtoAdd = {
      ...produto,
      actionId,
    };
    cart.push(produtoAdd);
    setCarrinho(cart.concat(carrinho));
  }

  function handleRemoveCart(produto) {
    setCarrinho((prevState) => prevState.filter(
      (produtoCarrinho) => produtoCarrinho.actionId !== produto.actionId,
    ));
  }

  function handleFreteSelecionadoNaoAssinante(valor, textoFrete) {
    setValorFrete(valor);
    setFrete(textoFrete);
  }

  function handleCupomSelected(cupom) {
    setCupomSelected(cupom.nomeCupom);
    setValorCupom(cupom.desconto);
  }

  async function handleFinishOrder() {
    if (carrinho.length === 0) {
      return alert('O carrinho está vazio.');
    }

    if (!frete) {
      return alert('Favor selecionar o frete antes de continuar');
    }

    try {
      setIsLoading(true);
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dataPedido = day + '/' + month + '/' + year;
      const OrderData = {
        data_pedido: dataPedido,
        loja,
        status: 'Em Separação',
        valor_total: valorCarrinho,
        user_id: data.user.id,
      };
      await PedidoService.createPedido(OrderData);
    } catch {
      alert('Não foi possível criar o pedido.');
    } finally {
      setIsLoading(false);
      history.push('/home');
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <h1>{loja}</h1>
        <ContainerProductsAndCart>
          <ContainerListaProdutos>
            <h1>Produtos: </h1>
            {produtosLoja.map((produto) => (
              <RowProduct key={produto.id}>
                <InfoContainer>
                  <span>{produto.nome}</span>
                  <h4>
                    R$
                    {produto.valor}
                  </h4>
                </InfoContainer>
                <Button onClick={() => handleAddToCart(produto)}>Adicionar</Button>
              </RowProduct>
            ))}
          </ContainerListaProdutos>
          <ContainerCheckout>
            <ContainerCarrinho>
              <h1>Produtos no Carrinho: </h1>
              {carrinho.map((produto) => (
                <RowProductCarrinho key={produto.actionId}>
                  <InfoContainer>
                    <span>{produto.nome}</span>
                    <h4>
                      R$
                      {produto.valor}
                    </h4>
                  </InfoContainer>
                  <Button onClick={() => handleRemoveCart(produto)}>Remover</Button>
                </RowProductCarrinho>
              ))}
            </ContainerCarrinho>
          </ContainerCheckout>
        </ContainerProductsAndCart>
        <ContainerTotal>
          <ContainerInfoEntrega>
            <h1>Informações sobre a entrega: </h1>
            {userData.address ? (
              <RowInfoAddress>
                <div className="row">
                  <span className="title-address">Endereço:</span>
                  <span>
                    {userData.address}
                  </span>
                </div>
                <div className="row">
                  <span className="title-address">Cidade:</span>
                  <span>
                    {userData.city}
                  </span>
                </div>
                <div className="row">
                  <span className="title-address">Estado:</span>
                  <span>
                    {userData.estado}
                  </span>
                </div>
                <Button onClick={() => history.push(`/editUser/${userData.id}`)}>Editar</Button>
              </RowInfoAddress>
            ) : (
              <>
                <h4>Seu endereço não está completo</h4>
                <Button>Editar</Button>
              </>
            )}
            <RowInfoFrete>
              <h1>Frete: </h1>
              {userData.assinante ? (
                <>
                  <RowOptionFrete>
                    <span>
                      Sedex - 2 dias Utéis -
                      <s>R$8,50</s>
                    </span>
                    <input type="radio" name="frete" value="Sedex - 2 dias Utéis" onClick={() => setFrete('Sedex - 2 dias Utéis')} />
                  </RowOptionFrete>
                  <RowOptionFrete>
                    <span>
                      Fedex - 3 dias Utéis -
                      <s>R$6,50</s>
                    </span>
                    <input type="radio" name="frete" value="Fedex - 3 dias Utéis" onClick={() => setFrete('Fedex - 3 dias Utéis')} />
                  </RowOptionFrete>
                  <RowOptionFrete>
                    <span>
                      Particular - 1 dias Útil -
                      <s>R$9,50</s>
                    </span>
                    <input type="radio" name="frete" value="Particular - 1 dias Útil" onClick={() => setFrete('Particular - 1 dias Útil')} />
                  </RowOptionFrete>
                  <span className="text-assinatura-frete">Devido a sua assinatura você não terá custo com frete! :)</span>
                </>
              ) : (
                <>
                  <RowOptionFrete>
                    <span>
                      Sedex - 2 dias Utéis - R$8,50
                    </span>
                    <input type="radio" name="frete2" value="Sedex - 2 dias Utéis" onClick={() => handleFreteSelecionadoNaoAssinante(8.50, 'Sedex - 2 dias Utéis')} />
                  </RowOptionFrete>
                  <RowOptionFrete>
                    <span>
                      Fedex - 3 dias Utéis - R$6,50
                    </span>
                    <input type="radio" name="frete2" value="Fedex - 3 dias Utéis" onClick={() => handleFreteSelecionadoNaoAssinante(6.50, 'Fedex - 3 dias Utéis')} />
                  </RowOptionFrete>
                  <RowOptionFrete>
                    <span>
                      Particular - 1 dias Utéis - R$9,50
                    </span>
                    <input type="radio" name="frete2" value="Particular - 1 dias Útil" onClick={() => handleFreteSelecionadoNaoAssinante(9.50, 'Particular - 1 dias Útil')} />
                  </RowOptionFrete>
                </>
              )}
            </RowInfoFrete>
          </ContainerInfoEntrega>
          <ContainerCupons>
            <h1>Cupons: </h1>
            {lojaSelecionada[0].cupons.map((cupom) => (
              <>
                {userData.assinante ? (
                  <>
                    <RowCupom key={Math.random()}>
                      <input type="radio" name="cupom" value={cupom.nomeCupom} onClick={() => handleCupomSelected(cupom)} />
                      <span>{cupom.nomeCupom}</span>
                    </RowCupom>
                    <span>{cupom.descricaoCupom}</span>
                  </>
                ) : (
                  null
                )}
              </>
            ))}
            {!userData.assinante ? (
              <RowCupomNaoAssinante>
                <span>Cupons especiais estão disponíveis apenas para assinantes PetVerso</span>
                <Button onClick={() => history.push('/assinatura')}>Ver Planos</Button>
              </RowCupomNaoAssinante>
            ) : (
              null
            )}
          </ContainerCupons>
          <ContainerTotalPedido>
            <div className="border-total">
              <EspacamentoAreaTotalPedido>
                <h3>Cupom Selecionado: </h3>
                {cupomSelected ? (
                  <span>{cupomSelected}</span>
                ) : (
                  null
                )}
              </EspacamentoAreaTotalPedido>
              <EspacamentoAreaTotalPedido>
                <h3>Frete Selecionado:</h3>
                {frete ? (
                  <span>{frete}</span>
                ) : (
                  <span>Selecionar Frete</span>
                )}
              </EspacamentoAreaTotalPedido>
              <ContainerValorTotalPedido>
                <h1>Valor Total: </h1>
                {userData.assinante ? (
                  <h3>
                    R$
                    {' '}
                    {valorCarrinho -= (valorCarrinho * valorCupom)}
                  </h3>
                ) : (
                  <h3>
                    R$
                    {' '}
                    {valorCarrinho += valorFrete}
                  </h3>
                )}
                <Button onClick={handleFinishOrder}>Finalizar Pedido</Button>
              </ContainerValorTotalPedido>
            </div>
          </ContainerTotalPedido>
        </ContainerTotal>
      </Container>
      <Footer />
    </>
  );
}
