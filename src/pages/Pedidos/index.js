import { useState, useEffect } from 'react';

import { produtos } from '../../utils/mock/produtos';

import {
  Container, ContainerListaProdutos, RowProduct,
  ContainerCarrinho, ContainerCheckout, RowProductCarrinho,
  InfoContainer, ContainerTotal, ContainerProductsAndCart,
  ContainerInfoEntrega, ContainerTotalPedido,
  RowInfoAddress, RowInfoFrete,
  RowOptionFrete, ContainerCupons,
} from './style';

import UserService from '../../services/UserService';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Button from '../../button';
import Loader from '../../Components/Loader';

export default function Pedidos() {
  const UserId = localStorage.getItem('UserID');
  const [carrinho, setCarrinho] = useState([]);
  const [userData, setUserData] = useState('');
  const [frete, setFrete] = useState('');
  const [valorFinal, setValorFinal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let valorCarrinho = 0;

  const cart = [];

  console.log(UserId);

  carrinho.map((produto) => (
    valorCarrinho += produto.valor
  ));

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const UserInfo = await UserService.getUserById(UserId);
        setUserData(UserInfo);
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
    setFrete('');

    setCarrinho((prevState) => prevState.filter(
      (produtoCarrinho) => produtoCarrinho.actionId !== produto.actionId,
    ));
  }

  function handleFreteSelecionadoNaoAssinante(valor, textoFrete) {
    console.log(valor);
    let valorTotal = valorCarrinho + valor;
    setValorFinal(valorTotal);
    console.log(valorCarrinho);
    setFrete(textoFrete);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      <Container>
        <ContainerProductsAndCart>
          <ContainerListaProdutos>
            <h1>Produtos: </h1>
            {produtos.map((produto) => (
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
                <Button>Editar</Button>
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
                    <input type="radio" name="frete" value="Sedex - 2 dias Utéis" onClick={() => handleFreteSelecionadoNaoAssinante(8.50, 'Sedex - 2 dias Utéis')} />
                  </RowOptionFrete>
                  <RowOptionFrete>
                    <span>
                      Fedex - 3 dias Utéis - R$6,50
                    </span>
                    <input type="radio" name="frete" value="Fedex - 3 dias Utéis" onClick={() => handleFreteSelecionadoNaoAssinante(6.50, 'Fedex - 3 dias Utéis')} />
                  </RowOptionFrete>
                  <RowOptionFrete>
                    <span>
                      Particular - 1 dias Utéis - R$9,50
                    </span>
                    <input type="radio" name="frete" value="Particular - 1 dias Útil" onClick={() => handleFreteSelecionadoNaoAssinante(9.50, 'Particular - 1 dias Útil')} />
                  </RowOptionFrete>
                </>
              )}
            </RowInfoFrete>
          </ContainerInfoEntrega>
          <ContainerCupons>
            <h1>Cupons: </h1>
          </ContainerCupons>
          <ContainerTotalPedido>
            <div className="border-total">
              <h3>Frete Selecionado:</h3>
              {frete ? (
                <span>{frete}</span>
              ) : (
                <span>Selecionar Frete</span>
              )}
              <h1>Valor Total: </h1>
              {frete ? (
                <h3>{valorFinal}</h3>
              ) : (
                <h3>{valorCarrinho}</h3>
              )}
              <Button>Finalizar Pedido</Button>
            </div>
          </ContainerTotalPedido>
        </ContainerTotal>
      </Container>
      <Footer />
    </>
  );
}
